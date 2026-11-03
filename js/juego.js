(function () {
    "use strict";

    var datos = window.DATOS_JUEGO;
    var raiz = document.querySelector("[data-juego]");

    if (!datos || !raiz) {
        return;
    }

    var guion = document.currentScript;
    var base = guion ? new URL("../", guion.src) : new URL("./", window.location.href);
    var indice = 0;
    var aciertos = 0;
    var ETIQUETAS = {
        recomendada: "Recomendada",
        precaucion: "Precaución",
        riesgo: "No recomendada"
    };

    function crear(etiqueta, clase, texto) {
        var elemento = document.createElement(etiqueta);
        if (clase) {
            elemento.className = clase;
        }
        if (texto) {
            elemento.textContent = texto;
        }
        return elemento;
    }

    function limpiar() {
        while (raiz.firstChild) {
            raiz.removeChild(raiz.firstChild);
        }
    }

    function pantallaInicio(enfocar) {
        limpiar();

        var intro = crear("p", "juego__intro", datos.intro);
        var nota = crear("p", "juego__nota", datos.nota);
        var acciones = crear("div", "juego__acciones");
        var comenzar = crear("button", "boton boton--acento boton--grande", "Comenzar");
        comenzar.type = "button";
        comenzar.addEventListener("click", function () {
            indice = 0;
            aciertos = 0;
            mostrarSituacion();
        });

        acciones.appendChild(comenzar);
        raiz.appendChild(intro);
        raiz.appendChild(nota);
        raiz.appendChild(acciones);
        if (enfocar) {
            comenzar.focus();
        }
    }

    function mostrarSituacion() {
        if (indice >= datos.situaciones.length) {
            mostrarFinal();
            return;
        }

        limpiar();

        var situacion = datos.situaciones[indice];
        var progreso = crear("p", "juego__progreso", "Situación " + (indice + 1) + " de " + datos.situaciones.length);
        var grupo = crear("div", "juego__situacion");
        grupo.setAttribute("role", "group");

        var pregunta = crear("h3", "juego__pregunta", situacion.escenario);
        pregunta.id = "juego-pregunta";
        pregunta.tabIndex = -1;
        grupo.setAttribute("aria-labelledby", "juego-pregunta");

        var lista = crear("ul", "juego__opciones");

        situacion.opciones.forEach(function (opcion, numero) {
            var item = document.createElement("li");
            var boton = crear("button", "juego__opcion", opcion.texto);
            boton.type = "button";
            boton.addEventListener("click", function () {
                elegir(numero);
            });
            item.appendChild(boton);
            lista.appendChild(item);
        });

        grupo.appendChild(pregunta);
        grupo.appendChild(lista);
        raiz.appendChild(progreso);
        raiz.appendChild(grupo);
        pregunta.focus();
    }

    function elegir(numeroOpcion) {
        var situacion = datos.situaciones[indice];
        var opcion = situacion.opciones[numeroOpcion];
        var botones = raiz.querySelectorAll(".juego__opcion");

        for (var i = 0; i < botones.length; i += 1) {
            botones[i].disabled = true;
        }

        var elegido = botones[numeroOpcion];
        elegido.className += " juego__opcion--" + opcion.valor;

        var etiqueta = crear("span", "juego__etiqueta", ETIQUETAS[opcion.valor]);
        elegido.insertBefore(etiqueta, elegido.firstChild);

        if (opcion.valor === "recomendada") {
            aciertos += 1;
        }

        var feedback = crear("div", "juego__feedback juego__feedback--" + opcion.valor);
        feedback.setAttribute("role", "status");
        feedback.appendChild(crear("p", "juego__etiqueta", ETIQUETAS[opcion.valor]));
        feedback.appendChild(crear("p", "juego__comentario", opcion.comentario));
        raiz.appendChild(feedback);

        var acciones = crear("div", "juego__acciones");
        var siguiente = crear(
            "button",
            "boton",
            indice < datos.situaciones.length - 1 ? "Siguiente situación" : datos.situacionFinal
        );
        siguiente.type = "button";
        siguiente.addEventListener("click", function () {
            indice += 1;
            mostrarSituacion();
        });
        acciones.appendChild(siguiente);
        raiz.appendChild(acciones);
        siguiente.focus();
    }

    function mostrarFinal() {
        limpiar();

        var elegido = datos.finales[datos.finales.length - 1];
        for (var i = 0; i < datos.finales.length; i += 1) {
            if (aciertos >= datos.finales[i].minimo) {
                elegido = datos.finales[i];
                break;
            }
        }

        var resultado = crear(
            "p",
            "juego__resultado",
            "Opciones recomendadas: " + aciertos + " de " + datos.situaciones.length + "."
        );
        resultado.tabIndex = -1;

        var mensaje = crear("p", "juego__mensaje", elegido.mensaje);
        var nota = crear("p", "juego__nota", datos.nota);

        var acciones = crear("div", "juego__acciones");
        var reiniciar = crear("button", "boton boton--acento", "Volver a jugar");
        reiniciar.type = "button";
        reiniciar.addEventListener("click", function () {
            indice = 0;
            aciertos = 0;
            pantallaInicio(true);
        });

        var enlace = document.createElement("a");
        enlace.className = "boton boton--secundario";
        enlace.href = new URL("ayuda.html", base).href;
        enlace.textContent = "Ver líneas de ayuda";

        acciones.appendChild(reiniciar);
        acciones.appendChild(enlace);

        raiz.appendChild(resultado);
        raiz.appendChild(mensaje);
        raiz.appendChild(nota);
        raiz.appendChild(acciones);
        resultado.focus();
    }

    pantallaInicio(false);
})();
