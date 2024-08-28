const express = require('express');

const app = express();

app.use(express.json());


let clients = [

    {id: 1, name: 'name1'},
    {id: 2, name: 'name2'},
    {id: 3, name: 'name3'},
    {id: 4, name: 'name4'},
    {id: 5, name: 'name5'}
]


app.get('/', function(request, response) {

    response.send("server alive!!");

});


app.get('/api/v1/clients', function(req, res) {

    res.json(clients);
});


app.get('/api/v1/clients/:id', function(req, res) {

    const {id} = req.params;

    const miCliente = clients.find((client) => client.id == id);

    res.json(miCliente);
});


app.post('/api/v1/clients', function (req, res ) {

    const nuevoCliente = req.body;

    nuevoCliente.id = clients.length + 1;

    clients.push(nuevoCliente);

    res.status(201);
    res.json(nuevoCliente);

});



app.delete('/api/v1/clients/:id', function(req,res) {

    const {id} = req.params;

    clients = clients.filter(c => c.id != id);

    res.status(204);

    res.json();

});


app.listen(3000, function() {

    console.log('servidor ejecutando...');

});
