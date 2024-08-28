const http   = require('http');
const url    = require('url');
const moment = require('moment');


const server = http.createServer(function(req, res) {


    let body = [];

    let params = url.parse(req.url, true);
    console.log('ORDER: ' + params.query.order);
    console.log('LIMIT: ' + params.query.limit);

    // aca




    req.on('data', (chunk) => {

        console.log("-----------------");
        console.log(chunk);

        body.push(chunk);
    });


    // termine de recibir el request

    req.on('end', () => {

        //console.log(Buffer.concat(body).toString());

        console.log('Sending response...');

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('Hello World!\n' + moment().format('MMMM Do YYYY, h:mm:ss a'));



    });



});


server.listen(process.env.PORT || 3001,   () => {

    console.log('Server started...');

});
