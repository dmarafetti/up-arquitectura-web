var cluster = require('cluster');
var os = require('os');

if(cluster.isMaster) {

    var cpus = os.cpus().length;

    console.log(`Number of CPUs: ${cpus}`);

     //start as many children as the number of CPUs
     for (var i = 0; i < cpus; i++) {

        cluster.fork();

     }


    cluster.on('exit', function(code) {

        console.log('exit');

        cluster.fork();

    });


} else {

   require('./app');
}
