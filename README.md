# Mejor sin pastillas · App

Herramientas digitales del *Cuaderno de trabajo para nuevos hábitos* (Dr. Mauro Tortolo).

- `index.html`: portada de la app.
- `entrenamiento/`: Registro de mi entrenamiento, con acceso a fuerza y cardio.
- `fuerza/`: registro de entrenamiento de fuerza (clave `msp_fuerza_v1`).
- `cardio/`: registro mensual de cardio (clave `msp_cardio_v1`; `months` guarda promedios y mejor sesión de cada mes; `sessions` queda de la primera versión y se convierte sola).
- `planilla/`: planilla semanal de hábitos (clave `msp_planilla_v1`).
- `presion/`: registro de presión arterial (clave `msp_presion_v1`; `regs` guarda cada medición con fecha, hora, 1ª y 2ª medición, pulso y comentarios).
- `examenes/`: los 12 mini exámenes del Anexo (clave `msp_examenes_v1`, solo guarda resultados).
- `sw.js`: funcionamiento sin conexión. Al publicar una versión nueva, cambiar `VERSION`.

Los datos de cada persona se guardan solo en su teléfono (localStorage, clave `msp_fuerza_v1`). Nunca renombrar claves ni borrar campos guardados: las versiones nuevas deben convertir los datos viejos (función `migrate`).
