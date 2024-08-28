const http   = require('http');
const url    = require('url');
const fs     = require('fs');
const path   = require('path');



const server = http.createServer((req , res ) => {

    let parsedUrl    = url.parse(req.url, true);
    let resourcePath = parsedUrl.pathname;


    // atiendo home

    if(resourcePath === '/') {

        fs.readFile(path.resolve(__dirname, 'index.html'), 'utf-8', (err, data) => {

            if(err) {

                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.write('<p>Error reading index.html</p>');
                res.end();

            } else {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.write(data);
                res.end();

            }

        });

        return;
    }



    // atiendo imagenes

    let resultImg = /^\/assets\/(.+)$/.exec(resourcePath);

    if(resultImg) {

        fs.readFile(path.resolve(__dirname, `assets/${resultImg[1]}`), (err, data) => {

            if(err) {

                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html; charset=utf-8');
                res.write(`<p>Error reading ${resultImg[1]}</p></br><p>${err.message}</p>`);
                res.end();

            } else {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'image/png');
                res.write(data);
                res.end();

            }


        });

        return;
    }


    // atiendo css

    let resultCss = /^\/css\/(.+)$/.exec(resourcePath);

    if(resultCss) {

        fs.readFile(path.resolve(__dirname, `css/${resultCss[1]}`), (err, data) => {

            if(err) {

                res.statusCode = 404;
                res.end();

            } else {

                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/css');
                res.write(data);
                res.end();

            }


        });

        return;
    }




    // api

    let resultApi = /^\/api\/clients\/?$/.exec(resourcePath);

    if(resultApi) {

        // POST

        // DELETE

        // PUT

        // PATCH

        let clients = [

            {id: 1, name: 'Diego Sebastian'},
            {id: 2, name: 'Agustin Cassani'},
            {id: 3, name: 'Jesus Capineri'},
            {id: 4, name: 'Renato Gulli'}
        ];


        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(clients));
        res.end();

        return;
    }



    // fallback: not found

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end();

});


server.listen(process.env.PORT || 3000,  () => {

    console.log('Server started...');

});






