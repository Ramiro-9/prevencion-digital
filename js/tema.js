(function () {
    "use strict";

    document.documentElement.classList.add("js");

    var CLAVE = "prevencion-digital-tema";
    var TEMAS = ["claro", "oscuro", "alto-contraste"];
    var NOMBRES = { claro: "claro", oscuro: "oscuro", "alto-contraste": "alto contraste" };
    var COLORES = {
        claro: { base: "#0d2a4a", ludopatia: "#0d2a4a", ia: "#0d2a4a" },
        oscuro: { base: "#08111f", ludopatia: "#0b2417", ia: "#16101f" },
        "alto-contraste": { base: "#000000", ludopatia: "#000000", ia: "#000000" }
    };
    var ACENTOS = ["ludopatia", "ia"];

    function leerTema() {
        try {
            var guardado = window.localStorage.getItem(CLAVE);
            return TEMAS.indexOf(guardado) !== -1 ? guardado : "claro";
        } catch (error) {
            return "claro";
        }
    }

    function aplicarTema(tema) {
        if (tema === "claro") {
            document.documentElement.removeAttribute("data-tema");
        } else {
            document.documentElement.setAttribute("data-tema", tema);
        }
        var acento = null;
        for (var i = 0; i < ACENTOS.length; i += 1) {
            if (document.documentElement.classList.contains("acento-" + ACENTOS[i])) {
                acento = ACENTOS[i];
            }
        }
        var metas = document.querySelectorAll('meta[name="theme-color"]');
        for (var j = 0; j < metas.length; j += 1) {
            metas[j].setAttribute("content", COLORES[tema][acento || "base"]);
        }
    }

    function guardarTema(tema) {
        try {
            window.localStorage.setItem(CLAVE, tema);
        } catch (error) {
            // Sin almacenamiento disponible, el tema vale solo para esta página.
        }
    }

    aplicarTema(leerTema());

    document.addEventListener("DOMContentLoaded", function () {
        var botones = document.querySelectorAll("[data-tema-opcion]");
        var estado = document.querySelector("[data-tema-estado]");
        var actual = leerTema();

        function sincronizar(tema) {
            aplicarTema(tema);
            for (var i = 0; i < botones.length; i += 1) {
                var boton = botones[i];
                boton.setAttribute(
                    "aria-pressed",
                    boton.getAttribute("data-tema-opcion") === tema ? "true" : "false"
                );
            }
        }

        sincronizar(actual);

        function cerrarSelector(origen) {
            var detalles = origen.closest("details.selector-tema");
            if (!detalles) {
                return;
            }
            detalles.open = false;
            var resumen = detalles.querySelector("summary");
            if (resumen) {
                resumen.focus();
            }
        }

        for (var i = 0; i < botones.length; i += 1) {
            botones[i].addEventListener("click", function () {
                var tema = this.getAttribute("data-tema-opcion");
                guardarTema(tema);
                sincronizar(tema);
                if (estado) {
                    estado.textContent = "Tema " + NOMBRES[tema] + " activado.";
                }
                cerrarSelector(this);
            });
        }

        document.addEventListener("click", function (evento) {
            var abiertos = document.querySelectorAll("details.selector-tema[open]");
            for (var j = 0; j < abiertos.length; j += 1) {
                if (!abiertos[j].contains(evento.target)) {
                    abiertos[j].open = false;
                }
            }
        });

        document.addEventListener("keydown", function (evento) {
            if (evento.key !== "Escape") {
                return;
            }
            var abiertos = document.querySelectorAll("details.selector-tema[open]");
            for (var j = 0; j < abiertos.length; j += 1) {
                abiertos[j].open = false;
                var resumen = abiertos[j].querySelector("summary");
                if (resumen) {
                    resumen.focus();
                }
            }
        });
    });
})();
