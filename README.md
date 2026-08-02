<h1 align="center">
  <br>
  <a href="https://www.palermo.edu"><img src="https://www.palermo.edu/images/header/logo@2x.png" alt="up logo" width="130"></a>
  <br>
  Arquitectura Web
</h1>
<br>

***

[![forthebadge](https://forthebadge.com/images/badges/docker-container.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

<br>

Repositorio oficial de la materia Arquitectura Web. Departamento de Ingeniería - UP
**Profesor Ing. Diego Marafetti**

# Contenidos

- [Requerimientos](#requerimientos-)
- [Entorno de desarrollo](#entornos-de-desarrollo)
- [Ejemplos de la materia](#ejemplos-de-la-materia)
- [Trabajo Práctico](./trabajo-practico-spec/README.md)
- [Contributing](#contributing)
- [Contacto](#contacto)

## Requerimientos 🚀

- [Node.js](https://nodejs.org/en/download/package-manager/current) (LTS más reciente).
- [Docker](https://www.docker.com/) solo para el ejemplo `apache-php` (ver detalle abajo).

## Entornos de Desarrollo

Cualquier IDE. Preferentemente que soporte JavaScript, HTML y CSS. No hay preferencias en cuanto al sistema operativo.

## Ejemplos de la materia

Cada carpeta es un ejemplo independiente (su propio `package.json`, sin dependencias entre carpetas). Salvo que se indique lo contrario, se instala y corre así:

```bash
cd <carpeta-del-ejemplo>
npm install
npm run dev   # o npm start, según el ejemplo (ver tabla)
```

| Carpeta | Tema | Cómo correrlo |
|---|---|---|
| [`webserver-node-1`](./webserver-node-1) | Servidor HTTP nativo (`node:http`), sin framework: parseo de query string, lectura de body por streams. | `npm run dev` (puerto 3001) |
| [`webserver-node-2`](./webserver-node-2) | Servidor HTTP nativo que sirve estáticos (HTML, CSS, imágenes) y una mini API (`/api/clients`) ruteando a mano con regex + `fs`/`path`. | `npm start` |
| [`webserver-express-1`](./webserver-express-1) | Primera API con Express: CRUD de clientes (`/api/clients`) sobre una capa de servicio en memoria. | `npm run dev` (ejecuta `server.js`) |
| [`webserver-http2`](./webserver-http2) | Servidor HTTP/2 nativo (módulo `node:http2`) sobre TLS, con certificados locales ya incluidos en `certs/`. | `npm start` (puerto 8082) |
| [`node-cluster`](./node-cluster) | Escalado multi-proceso con el módulo `cluster`: un master hace *fork* de un worker por CPU y los relanza si mueren. | `node cluster.js` (sin `package.json`) |
| [`restful-api`](./restful-api) | Ejemplos de la presentación de arquitectura REST: API Express de turnos médicos, con CORS y logging (morgan). | `npm run dev` |
| [`dom-api`](./dom-api) | DOM API y `fetch`: página estática servida con Express que consume una API externa y renderiza los datos manipulando el DOM. | `npm run dev` (puerto 9090) |
| [`css-web`](./css-web) | CSS y Tailwind v4 con Vite. | `npm run dev` |
| [`file-reader`](./file-reader) | I/O de archivos en Node: contraste entre `fs.readFile` (asíncrono) y `fs.readFileSync` (síncrono). | `node main.js` (sin `package.json`) |
| [`unit-tests-jest`](./unit-tests-jest) | Introducción a testing unitario con Jest. | `npm test` |
| [`apache-php`](./apache-php) | Diálogo request/response entre browser y servidor con PHP sobre Apache, con ejemplo de HATEOAS. Requiere **Docker**. | `docker compose up --build`, luego abrir `http://localhost:8080/test.html` |

## Trabajo Práctico

El enunciado completo del trabajo práctico integrador está en [`trabajo-practico-spec/README.md`](./trabajo-practico-spec/README.md).

En resumen: desarrollar una webapp de dominio libre con foco en servicios web (backend en Node.js, API RESTful de nivel 2 de Richardson como mínimo, frontend con flujo CRUD/ABM completo). Entrega individual en `.zip` (sin `node_modules`, tamaño máximo 3 MB) con documentación de cada endpoint. Ver el spec para el detalle de criterios de evaluación y restricciones de entrega.

## Contributing

[(Back to top)](#contenidos)

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Contacto

[(Back to top)](#contenidos)

Diego Marafetti - [dmaraf@palermo.edu](mailto:dmaraf@palermo.edu)

> [!NOTE]
> La comunicación preferentemente por Pronto
