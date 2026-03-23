# Trabajo Práctico Integrador

Versión 2.0


## 1. Introducción y Enunciado
El objetivo de este Trabajo Práctico Integrador es desarrollar una aplicación web sobre un dominio de su elección (por ejemplo: sistema de gestión de stock, administración de usuarios, reservas, etc.), haciendo foco en la implementación de servicios web y cumpliendo con las funcionalidades detalladas a continuación. 

La solución deberá aplicar los estándares y patrones de arquitectura vistos durante la cursada. El desarrollo del **backend deberá realizarse excluyentemente en Node.js**.

## 2. Objetivos de Aprendizaje
Al completar este trabajo, el estudiante será capaz de:
1. Aplicar los conocimientos adquiridos sobre arquitectura web y el uso de herramientas modernas en el ciclo de vida completo del desarrollo de una aplicación.
2. Tomar decisiones fundamentadas sobre los frameworks y tecnologías más adecuados para la resolución de un problema particular.
3. Implementar buenas prácticas de diseño, codificación y documentación en proyectos de software.
4. Fomentar el uso de herramientas e Inteligencia Artificial (IA) generativa (ej. LLMs) como asistentes de desarrollo. Los alumnos podrán utilizarlas para consultar documentación técnica de frameworks y bibliotecas, o para validar patrones de diseño, siempre bajo la estricta premisa de comprender en profundidad cada línea de código implementada.

**Consideraciones tecnológicas generales:**
* El lenguaje de programación base a utilizar será **JavaScript**. Se permite y fomenta el uso de **TypeScript**.

---

## 3. Requerimientos Funcionales y Técnicos

La aplicación web a desarrollar deberá contemplar las siguientes especificaciones:

### 3.1. Backend
Será el responsable de implementar la lógica de negocio y la persistencia de datos. Se recomienda el uso del framework **Express** ([expressjs.com](https://expressjs.com/)).

1. **API RESTful:** Debe exponer una API REST (Nivel 2 de Richardson como mínimo) para que los clientes consuman los distintos servicios. En este punto se evaluará fuertemente el diseño de los endpoints y la aplicación de buenas prácticas (uso correcto de verbos HTTP, códigos de estado, etc.).
2. **Persistencia de Datos:** Se puede utilizar un motor de base de datos a elección o, alternativamente, implementar una persistencia en memoria. En cualquiera de los dos casos, al inicializar la aplicación, el sistema deberá cargar automáticamente un **set de datos por defecto (seed)** para facilitar la corrección y el testing.

### 3.2. Frontend
Se encargará exclusivamente de la capa de presentación y la interacción con el usuario. Se puede utilizar una librería o framework moderno (**React, Vue, Angular**) o desarrollarlo directamente en **Vanilla JS**. Se evaluará el uso semántico de HTML y la correcta aplicación de CSS.

1. **Gestión de Datos (CRUD):** La interfaz debe implementar al menos un flujo completo de ABM (Alta, Baja y Modificación) o CRUD.
2. **Reportes:** Se debe implementar al menos una pantalla dedicada a la visualización de un reporte derivado de los datos del sistema.
3. *Aclaración:* La implementación de un sistema de autenticación/login es completamente **opcional**.

### 3.3. Testing
1. **Testing de Endpoints:** Se deben realizar pruebas sobre los endpoints del backend. Estas pueden entregarse a través de una colección exportada de herramientas como **Postman**, scripts de **cURL**, o bien estar codificadas mediante frameworks de testing.
2. *Aclaración:* **No** se requiere realizar *unit testing* sobre el código del frontend.

### 3.4. Construcción y Ejecución
1. **Documentación de despliegue:** El repositorio debe incluir un archivo `README.md` claro y detallado con los pasos exactos para instalar las dependencias, compilar (si aplica) y ejecutar el proyecto.
2. **Scripts:** Se debe incluir el uso de scripts de automatización (por ejemplo, a través de `package.json` utilizando `npm` o `yarn`).

---

## 4. Presentación y Entrega

**Modalidad:** Individual.

### 4.1. Entregables requeridos
* **Código Fuente:** Archivo comprimido `.zip` con el código del frontend y el backend.
* **Documentación de la API:** Un documento (puede estar integrado en el README) que detalle cada endpoint expuesto por el backend indicando: 
  * Ruta del Endpoint (URL).
  * Verbo HTTP utilizado.
  * Breve descripción de su propósito.
  * Códigos de estado HTTP (Status Codes) posibles como respuesta.

### 4.2. Condiciones de Entrega
* La entrega se realizará subiendo el archivo `.zip` en la sección **"Entrega Trabajo Práctico"** del campus virtual.
* Se debe respetar estrictamente la fecha informada por el profesor e indicada en el calendario de la materia.

> [!WARNING]
> **RESTRICCIONES IMPORTANTES PARA EL ARCHIVO COMPRIMIDO:**
> * La entrega deberá contener **solamente el código fuente y la documentación**.
> * **NO incluir dependencias** (eliminar las carpetas `node_modules` antes de comprimir).
> * **NO incluir archivos ejecutables o binarios**.
> * Toda entrega cuyo peso supere los **3 MB** será rechazada automáticamente.
> * El formato del archivo comprimido debe ser excluyentemente **.zip** (No se aceptarán archivos .rar, .7z, etc.).