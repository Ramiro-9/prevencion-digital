# Prevención Digital

Sitio educativo y accesible sobre grooming y riesgos digitales, pensado para chicos, adolescentes, familias y docentes de Argentina.

## Qué incluye

- Información sobre grooming, Ley Mica Ortega, leyes de protección, plataformas, ludopatía e inteligencia artificial.
- Dos recorridos: “Soy chico/a o adolescente” y “Soy familiar o docente”.
- Líneas de ayuda visibles: 137, 102 y 911.
- Temas claro, oscuro y alto contraste, con la preferencia guardada en el navegador.

## Estructura

- Páginas raíz: inicio, grooming, Ley Mica Ortega, leyes, ayuda, privacidad, chicos y familias.
- `plataformas/`: Discord, Roblox, Minecraft y Free Fire.
- `temas/`: ludopatía e inteligencia artificial.
- `css/`: tokens, base, componentes y temas visuales.
- `js/`: selector de tema y persistencia.
- `data/`: datos de las funciones interactivas, que se incorporan en las próximas etapas.

## Cómo verlo

Abrí `index.html` con doble clic o serví la carpeta con un servidor local:

```bash
python -m http.server 8000
```

No requiere instalación, build ni dependencias.

## Accesibilidad y privacidad

- HTML semántico, un `h1` por página, navegación por teclado y foco visible.
- Sin analíticas, formularios ni recursos de terceros.
- La única preferencia guardada es el tema visual, en `localStorage`.
- Las fuentes oficiales están citadas en las páginas correspondientes.

## Estado

Proyecto en desarrollo. Las funciones interactivas se incorporan en las próximas etapas.

## Aviso

Proyecto educativo de prevención digital. No reemplaza asesoramiento profesional ni denuncias.
