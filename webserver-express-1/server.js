const express    = require('express');
const bodyParser = require('body-parser');
const moment     = require('moment');
const wrap       = require('co-express');
const {service, Client} = require('./services/clientsService');


// create express server

const app = express();


// parse body as json

app.use(express.json());



// all requests

app.use((req, res, next) => {

    console.log(`${req.method}: ${req.path} - ${moment().format(moment.HTML5_FMT.DATETIME_LOCAL_MS)}`);

    next();


});




// get home

app.get('/', async (req, res) => {


    let clients = await service.getAll();

    let list = [];

    clients.forEach((c) => {

        list.push(`<li>${c.nombre} con id: ${c.id}</li>`);

    });



    res.send(
        `<html>
            <head>
                <title>Title</title>
            </head>
            <body>
                <ul>
                    ${list.join('')}
                </ul>            
            </body>
        </html>`
    );


});





app.get('/api/clients', async (req, res) => {

    let clients = await service.getAll();

    res.json(clients);

    // res. content-type = application/json
    // res.write(JSON.stringify(clients))
    // res.end();

});



// get clients by id


app.get('/api/clients/:idCliente', async (req, res) => {

    try {

        let cli = await service.getById(req.params.idCliente); // 1234

        res.json(cli);

    } catch(ex) {

        console.log(ex);

        res.status(404).end();

    }

});


// add new client - Content Type: json

app.post('/api/clients', async (req, res) => {

    let newClient = await service.add(req.body); // => req.body = {nombre, edad}

    res.statusMessage = "CLIENTE CREADO";

    res.status(201).send(newClient);

});



app.delete('/api/clients/:id', (req, res) => {

    service.deleteById(req.params.id);

    res.status(204).end();
});





// start server

app.listen(process.env.PORT || 3000, function () {

    console.log('API y express.js...');

});
