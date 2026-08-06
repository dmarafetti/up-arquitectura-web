# Servidor HTTP con Node.js

Modalidad: Individual
Tiempo de entrega: sin tiempo
Objetivo: Que el estudiante instale Node.js (local o dockerizado), verifique la instalación y construya un webserver mínimo con el módulo nativo `http`, familiarizándose con el runtime que se va a usar durante el resto de la cursada para ejemplos de servidor.
Puntaje o calificación: 0-10 puntos
Formato de entrega: ver entregables

---

## Contexto

Node.js es el entorno de ejecución que vamos a usar en la materia para correr JavaScript del lado del servidor, y con el que se van a implementar buena parte de los ejemplos y actividades de los módulos siguientes. A diferencia del JavaScript que corre en el navegador, Node.js no tiene acceso al DOM ni a las Web APIs del cliente, pero sí expone módulos propios para trabajar con el sistema de archivos, la red y procesos del sistema operativo, entre otras capacidades.

Antes de usar cualquier framework (Express u otro) conviene tocar, aunque sea una vez, la capa más baja que Node.js expone para trabajar con HTTP: el módulo nativo `http`. Este módulo no oculta el ciclo de vida de un request/response detrás de ninguna abstracción adicional: expone directamente el objeto de request como un stream legible, y el de response como un stream escribible, sin magia de por medio. Trabajar contra esa API, aunque sea en un servidor mínimo, ayuda a entender qué es lo que un framework como Express hace por debajo cuando se lo usa más adelante en la cursada.

El escenario es el de cualquier desarrollador que necesita preparar su máquina para trabajar con Node.js por primera vez: instalar el runtime (de forma local o mediante un contenedor Docker), confirmar la versión instalada, y usar esa instalación para levantar un servidor HTTP real, aunque mínimo. No se espera ningún conocimiento previo de Node.js más allá de JavaScript básico: el objetivo es tanto de instalación como de primer contacto con la API de servidor.

Se recomienda instalar la versión **LTS** (*Long Term Support*) más reciente disponible, ya sea descargándola directamente desde el sitio oficial, mediante un gestor de versiones como `nvm` (*Node Version Manager*), o corriendo Node.js dentro de un contenedor Docker con la imagen oficial `node`, si se prefiere no instalar nada directamente en el sistema operativo.

## Ejercicios

### Ejercicio 1: Repositorio en GitHub

Crear un repositorio en GitHub que va a contener, de ahora en más, todo el código fuente del Trabajo Práctico Integrador. Este mismo repositorio se va a ir completando a lo largo de la cursada con el backend, el frontend y cualquier otro artefacto que pidan las actividades de los módulos siguientes.

Requisitos mínimos del repositorio:

1. Repositorio nuevo (no reutilizar uno de otra materia o proyecto anterior).
2. Un archivo `README.md` inicial, aunque sea breve, describiendo el nombre y el propósito del proyecto.
3. Un archivo `.gitignore` apropiado para el stack que se vaya a usar (como mínimo, excluir `node_modules/`).
4. Al menos un commit inicial ya subido al repositorio remoto.

### Ejercicio 2: Instalación de Node.js

Instalar Node.js, usando **una** de las siguientes vías:

1. **Instalación local**: descarga directa del instalador desde [nodejs.org](https://nodejs.org/en/download/package-manager/current) (versión LTS), o mediante un gestor de versiones como `nvm`.
2. **Instalación dockerizada**: usando la imagen oficial `node` (por ejemplo, `docker run -it --rm -p 3000:3000 -v "$PWD":/app -w /app node:lts bash`), sin necesidad de instalar Node.js directamente en el sistema operativo.

Verificar la instalación ejecutando, dentro del entorno elegido:

```bash
node --version
npm --version
```

### Ejercicio 3: Webserver con el módulo `http`

Usando **únicamente** el módulo nativo `http` de Node.js (sin frameworks como Express), implementar un servidor que exponga dos rutas:

1. **`GET /`**: responde con status code `200` y un mensaje simple en texto plano, confirmando que el servidor está funcionando.
2. **`POST /archivo`**: recibe un archivo (o cualquier contenido binario) en el body del request, cuenta la cantidad total de bytes recibidos en el payload, y responde en texto plano con ese número.

### Requerimientos

1. Crear el servidor con `http.createServer()`, escuchando en un puerto local (por ejemplo, `3000`).
2. Distinguir las rutas evaluando `req.method` y `req.url` dentro del callback del servidor.
3. Para `POST /archivo`: el body del request llega de forma asíncrona, en fragmentos (*chunks*), a través de los eventos `data` y `end` del objeto `req` (que es un stream legible). Acumular la cantidad de bytes de cada `chunk` recibido, y recién responder cuando el evento `end` confirme que no va a llegar más contenido.
4. Cualquier ruta o método no contemplado debe responder con status code `404`.
5. El servidor debe poder probarse con `curl`, por ejemplo:

   ```bash
   curl http://localhost:3000/
   curl -X POST --data-binary @algun-archivo.bin http://localhost:3000/archivo
   ```

   Un resultado esperado, para un archivo `algun-archivo.bin` de 2048 bytes, es el siguiente:

   ```
   $ curl http://localhost:3000/
   Servidor funcionando correctamente

   $ curl -X POST --data-binary @algun-archivo.bin http://localhost:3000/archivo
   Bytes recibidos: 2048
   ```

### Entregable

Archivo fuente `server.js` con el servidor completo, subido al repositorio creado en el Ejercicio 1.

## Criterios Generales

- El repositorio en GitHub existe, es accesible, y va a usarse como repositorio único del Trabajo Práctico Integrador durante el resto de la cursada.
- Node.js instalado corresponde a una versión **LTS** vigente (no una versión *Current*/experimental), ya sea local o dentro de un contenedor Docker.
- El servidor usa **exclusivamente** el módulo nativo `http` (no se permite Express ni ningún otro framework para este ejercicio).
- `GET /` responde `200` con contenido en texto plano.
- `POST /archivo` responde con el conteo exacto de bytes recibidos en el payload, verificado contra el tamaño real del archivo enviado.
- Cualquier ruta o método no contemplado responde `404`.
- Identificadores en inglés, comentarios en español latinoamericano.
- El informe entregado documenta el sistema operativo (o la imagen Docker) usado y el método de instalación elegido.

## Entregables

1. **Link al repositorio de GitHub** creado en el Ejercicio 1, con al menos el commit inicial y el `server.js` del Ejercicio 3 ya subidos.
2. **Captura de pantalla o registro de texto** de la salida de `node --version` y `npm --version`.
3. **Código fuente** `server.js` con el servidor implementado (también disponible en el repositorio).
4. **Evidencia de prueba**: salida de los comandos `curl` (u otra herramienta equivalente) contra `GET /` y `POST /archivo`, mostrando el conteo de bytes correcto.
5. **Informe breve (máximo media carilla)** indicando: sistema operativo o entorno Docker usado, método de instalación elegido, y cualquier dificultad encontrada durante el proceso.
