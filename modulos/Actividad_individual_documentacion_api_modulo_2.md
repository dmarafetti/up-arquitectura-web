# Documentación de la API

Modalidad: Individual
Tiempo de entrega: sin tiempo
Objetivo: Que el estudiante documente formalmente los endpoints de la API de su backend elegido, aplicando el vocabulario de rutas, verbos y status codes desarrollado en el módulo.
Puntaje o calificación: 0-10 puntos
Formato de entrega: ver entregables

---

## Ejercicios

### Ejercicio 1: Descripción general del backend

Redactar una descripción breve del backend elegido: qué dominio o problema resuelve (por ejemplo, gestión de turnos, catálogo de productos, sistema de reservas). La documentación completa tiene que estar README del repositorio.

### Ejercicio 2: Documentación de cada endpoint

Para **cada endpoint** expuesto por el backend, documentar:

1. **Ruta del endpoint (URL)**: el path completo, incluyendo parámetros de ruta si los tiene (por ejemplo, `/usuarios/:id`).
2. **Verbo HTTP utilizado**: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, etc.
3. **Breve descripción de su propósito**: qué hace ese endpoint en una o dos oraciones.
4. **Códigos de estado HTTP posibles como respuesta**: cada status code que el endpoint puede devolver, con una breve indicación de en qué caso ocurre (por ejemplo, `200 OK` si la operación fue exitosa, `404 Not Found` si el recurso no existe, `400 Bad Request` si el body no cumple el formato esperado).

Si el endpoint recibe un body (en `POST`, `PUT` o `PATCH`), incluir también un ejemplo del formato esperado (JSON de ejemplo con los campos requeridos).


## Criterios Generales

- La documentación cubre **todos** los endpoints efectivamente implementados en el backend al momento de la entrega, sin omitir ninguno.
- Cada endpoint documentado incluye los cuatro datos pedidos: ruta, verbo, propósito y status codes posibles.
- Los status codes listados son coherentes con lo que el código del backend realmente devuelve (no una lista genérica copiada sin verificar).
- El documento final está exportado en un archivo entregable (PDF o similar), no solo disponible como texto en un repositorio.
- Español latinoamericano, redacción clara y sin ambigüedad técnica.

## Entregables

1. **Documento exportado** (PDF o formato equivalente) con la descripción del backend y la documentación completa de la API.
2. Opcionalmente, el mismo contenido integrado en el README del repositorio del backend (no reemplaza el documento exportado, lo complementa).
