# Mejor sin pastillas · App

Herramientas digitales del *Cuaderno de trabajo para nuevos hábitos* (Dr. Mauro Tortolo).

- `index.html`: portada de la app.
- `fuerza/`: registro de entrenamiento de fuerza (clave `msp_fuerza_v1`).
- `planilla/`: planilla semanal de hábitos (clave `msp_planilla_v1`).
- `examenes/`: los 12 mini exámenes del Anexo (clave `msp_examenes_v1`, solo guarda resultados).
- `sw.js`: funcionamiento sin conexión. Al publicar una versión nueva, cambiar `VERSION`.

Los datos de cada persona se guardan solo en su teléfono (localStorage, clave `msp_fuerza_v1`). Nunca renombrar claves ni borrar campos guardados: las versiones nuevas deben convertir los datos viejos (función `migrate`).
