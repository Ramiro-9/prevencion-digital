(function () {
    "use strict";

    var datos = window.DATOS_AYUDANTE;
    var panel = document.getElementById("ayudante");
    var abridor = document.getElementById("ayudante-abrir");

    if (!datos || !panel || !abridor) {
        return;
    }

    var registro = document.getElementById("ayudante-registro");
    var sugerencias = document.getElementById("ayudante-sugerencias");
    var formulario = document.getElementById("ayudante-form");
    var entrada = document.getElementById("ayudante-entrada");
    var cerrar = panel.querySelector("[data-ayudante-cerrar]");
    var guion = document.currentScript;
    var base = guion ? new URL("../", guion.src) : new URL("./", window.location.href);
    var ultimoTema = null;
    var saludoMostrado = false;

    var INTENCIONES = [
        ["relacion", /(relacion|vincul|que tiene que ver)/],
        ["accion", /(que hago|que puedo hacer|denunci|me paso|le paso|victima|pedir ayuda|necesito ayuda|pide fotos|piden fotos|acos)/],
        ["senales", /(senal|alerta|detect|reconoc|sospech)/],
        ["riesgos", /(riesgo|peligro|amenaza|problema)/],
        ["cuidado", /(prote|cuid|configur|control|preven|consejo|medida|seguridad|seguro)/],
        ["atencion", /(importante|ojo con|atencion|tener en cuenta)/],
        ["definicion", /(que es|que son|que significa|explica|definicion|de que se trata|quien es)/]
    ];

    function normalizar(texto) {
        return texto
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, " ")
            .trim();
    }

    function vinetas(lista) {
        return "• " + lista.join("\n• ");
    }

    function buscarTema(id) {
        for (var i = 0; i < datos.temas.length; i += 1) {
            if (datos.temas[i].id === id) {
                return datos.temas[i];
            }
        }
        return null;
    }

    function coincideClave(texto, clave) {
        var k = normalizar(clave);
        if (!k) {
            return false;
        }
        if (k.length <= 4) {
            return (" " + texto + " ").indexOf(" " + k + " ") !== -1;
        }
        return texto.indexOf(k) !== -1;
    }

    function detectarTema(texto) {
        for (var i = 0; i < datos.temas.length; i += 1) {
            var tema = datos.temas[i];
            for (var j = 0; j < tema.claves.length; j += 1) {
                if (coincideClave(texto, tema.claves[j])) {
                    return tema;
                }
            }
        }
        return null;
    }

    function detectarIntencion(texto) {
        for (var i = 0; i < INTENCIONES.length; i += 1) {
            if (INTENCIONES[i][1].test(texto)) {
                return INTENCIONES[i][0];
            }
        }
        return null;
    }

    function respuestaTema(tema, intencion) {
        var texto;

        if (tema.id === "ayuda") {
            texto = tema.resumen;
            if (intencion === "accion" || intencion === "cuidado" || intencion === "senales" || intencion === "riesgos") {
                texto = "Pasos para pedir ayuda:\n" + vinetas(tema.pasos) + "\n\n" + tema.resumen;
            }
            return { texto: texto, pagina: tema.pagina };
        }

        if (intencion === "riesgos") {
            if (tema.riesgos) {
                texto = "Principales riesgos de " + tema.nombre + ":\n" + vinetas(tema.riesgos);
            } else if (tema.senales) {
                texto = "Señales para estar atento/a:\n" + vinetas(tema.senales);
            } else if (tema.puntos) {
                texto = vinetas(tema.puntos);
            } else {
                texto = tema.resumen;
            }
        } else if (intencion === "senales") {
            if (tema.senales) {
                texto = "Señales de alerta:\n" + vinetas(tema.senales);
            } else if (tema.riesgos) {
                texto = "No hay una lista fija de señales, pero esto es lo que conviene mirar:\n" + vinetas(tema.riesgos);
            } else {
                texto = tema.resumen;
            }
        } else if (intencion === "cuidado") {
            if (tema.medidas) {
                texto = "Cómo cuidarte en " + tema.nombre + ":\n" + vinetas(tema.medidas);
            } else if (tema.actuar) {
                texto = "Qué podés hacer:\n" + vinetas(tema.actuar);
            } else if (tema.pasos) {
                texto = "Pasos para pedir ayuda:\n" + vinetas(tema.pasos);
            } else if (tema.puntos) {
                texto = vinetas(tema.puntos);
            } else {
                texto = tema.resumen;
            }
        } else if (intencion === "accion") {
            if (tema.actuar) {
                texto = "Qué podés hacer:\n" + vinetas(tema.actuar);
            } else if (tema.pasos) {
                texto = "Pasos para pedir ayuda:\n" + vinetas(tema.pasos);
            } else if (tema.medidas) {
                texto = "Medidas concretas:\n" + vinetas(tema.medidas);
            } else {
                texto = tema.resumen;
            }
            if (tema.id !== "grooming") {
                texto += "\n\nSi alguien te pide algo que te incomoda, no lo manejes en soledad: contale a un adulto de confianza.";
            }
        } else if (intencion === "relacion") {
            if (tema.grooming) {
                texto = tema.grooming;
            } else if (tema.puntos) {
                texto = vinetas(tema.puntos);
            } else {
                texto = tema.resumen;
            }
        } else if (intencion === "atencion") {
            texto = tema.resumen;
            if (tema.senales) {
                texto += "\n\nConviene prestar atención a:\n" + vinetas(tema.senales.slice(0, 4));
            }
        } else {
            texto = tema.resumen;
            if (tema.puntos) {
                texto += "\n\n" + vinetas(tema.puntos);
            } else {
                texto += "\n\nPodés preguntarme por los riesgos, las señales de alerta o cómo cuidarte.";
            }
        }

        if (intencion === "accion" || (tema.id === "grooming" && intencion !== "definicion")) {
            texto += "\n\n" + datos.cierreAyuda;
        }

        return { texto: texto, pagina: tema.pagina };
    }

    function respuesta(texto) {
        var t = normalizar(texto);
        var tema = detectarTema(t);
        var intencion = detectarIntencion(t);

        if (!tema && ultimoTema && intencion && t.split(" ").length <= 6 && intencion !== "definicion") {
            tema = ultimoTema;
        }

        if (/(^| )(hola|buenas|buen dia|buenas tardes|buenas noches)( |$)/.test(t)) {
            return { texto: datos.saludo };
        }

        if (/gracias/.test(t)) {
            return { texto: datos.agradecimiento };
        }

        if (!tema) {
            if (intencion === "accion") {
                tema = buscarTema("grooming");
            } else if (intencion === "senales") {
                tema = buscarTema("grooming");
            } else if (intencion === "cuidado") {
                tema = buscarTema("grooming");
            } else {
                return { texto: datos.noEntendido };
            }
        }

        ultimoTema = tema;
        return respuestaTema(tema, intencion);
    }

    function burbuja(texto, esUsuario, pagina) {
        var mensaje = document.createElement("div");
        mensaje.className = "ayudante__mensaje " + (esUsuario ? "ayudante__mensaje--usuario" : "ayudante__mensaje--bot");

        var parrafo = document.createElement("p");
        parrafo.className = "ayudante__texto";
        parrafo.textContent = texto;
        mensaje.appendChild(parrafo);

        if (pagina) {
            var enlace = document.createElement("a");
            enlace.className = "ayudante__enlace";
            enlace.href = new URL(pagina, base).href;
            enlace.textContent = pagina === "ayuda.html" ? "Ver líneas de ayuda" : "Ver la página completa";
            mensaje.appendChild(enlace);
        }

        registro.appendChild(mensaje);
        registro.scrollTop = registro.scrollHeight;
    }

    function enviar(texto) {
        burbuja(texto, true);
        var resultado = respuesta(texto);
        burbuja(resultado.texto, false, resultado.pagina);
    }

    datos.preguntasSugeridas.forEach(function (pregunta) {
        var boton = document.createElement("button");
        boton.type = "button";
        boton.className = "ayudante__sugerencia";
        boton.textContent = pregunta;
        boton.addEventListener("click", function () {
            enviar(pregunta);
        });
        sugerencias.appendChild(boton);
    });

    function abrirPanel() {
        if (panel.open) {
            return;
        }
        if (typeof panel.show === "function") {
            panel.show();
        } else {
            panel.setAttribute("open", "");
        }
        abridor.setAttribute("aria-expanded", "true");
        if (!saludoMostrado) {
            burbuja(datos.saludo, false);
            saludoMostrado = true;
        }
        entrada.focus();
    }

    function cerrarPanel() {
        if (!panel.open) {
            return;
        }
        if (typeof panel.close === "function") {
            panel.close();
        } else {
            panel.removeAttribute("open");
        }
        abridor.setAttribute("aria-expanded", "false");
        abridor.focus();
    }

    abridor.setAttribute("aria-expanded", "false");

    abridor.addEventListener("click", function () {
        if (panel.open) {
            cerrarPanel();
        } else {
            abrirPanel();
        }
    });

    cerrar.addEventListener("click", cerrarPanel);

    panel.addEventListener("close", function () {
        abridor.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape" && panel.open) {
            cerrarPanel();
        }
    });

    formulario.addEventListener("submit", function (evento) {
        evento.preventDefault();
        var valor = entrada.value.trim();
        if (!valor) {
            return;
        }
        entrada.value = "";
        enviar(valor);
    });
})();
