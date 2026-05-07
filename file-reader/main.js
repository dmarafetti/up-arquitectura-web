const fs = require("fs", "utf8");

// REQUEST IO: OK

function imprimirFile(err, data) {

    console.log(data);
}


console.log("Antes del readFile"); // 1

// fs.readFile("./readme.txt", imprimirFile);
const buffer = fs.readFileSync("./readme.txt");



console.log(buffer);

console.log('Despues del readFile'); //




