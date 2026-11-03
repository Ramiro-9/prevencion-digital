# Prevención Digital

Sitio educativo y accesible sobre grooming y riesgos digitales, pensado para chicos, adolescentes, familias y docentes de Argentina.

## Qué incluye

- Información sobre grooming, Ley Mica Ortega, leyes de protección, plataformas, ludopatía e inteligencia artificial.
- Dos recorridos: “Soy chico/a o adolescente” y “Soy familiar o docente”.
- Líneas de ayuda visibles: 137, 102 y 911.
- Temas claro, oscuro y alto contraste, con la preferencia guardada en el navegador.
- Ayudante de preguntas frecuentes que detecta tema e intención, con datos propios en `data/`.
- Juego “Elige el mejor camino” en la página para chicos, con cinco situaciones y retroalimentación.

## Estructura

- Páginas raíz: inicio, grooming, Ley Mica Ortega, leyes, ayuda, privacidad, chicos y familias.
- `plataformas/`: Discord, Roblox, Minecraft y Free Fire.
- `temas/`: ludopatía e inteligencia artificial.
- `css/`: tokens, base, componentes y temas visuales.
- `js/`: selector de tema, ayudante y juego.
- `data/`: datos del ayudante y del juego, separados del código.

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
- El ayudante y el juego funcionan sin conexión y no guardan la conversación ni el resultado.
- Las fuentes oficiales están citadas en las páginas correspondientes.

## Estado

Fases 1 a 7 completas: contenido, base visual, navegación, accesibilidad, funciones interactivas y verificación final (links, fuentes, metadatos, tono y accesibilidad revisados el 3 de noviembre de 2026). Los contadores animados quedan fuera hasta contar con estadísticas con fuente verificada. Pendientes humanos antes de publicar (fase 8): revisión de docente u orientación, prueba en celular real, correo institucional y decisión sobre el video.

## Aviso

Proyecto educativo de prevención digital. No reemplaza asesoramiento profesional ni denuncias.
