// Ejercicio 1
// Creu una funció que imprimeixi recursivamente un missatge per consola amb demores d'un segon.

const printMessage = () => {
    console.log("Ejercicio 1: Infinite Hello World");
    setTimeout(printMessage, 1000);
}

printMessage();


// Ejercicio 2
// Creu una funció que, en executar-la, escrigui el seu nom en un fitxer.

const {writeFile} = require("fs");

const writeNameInFile =  (data, fileName) =>  writeFile(fileName, data, (err) => {
    if(err) throw err
    console.log(`Ejercicio 2: Creating ${fileName} with this data: ${data}`);
});

writeNameInFile("Cristian Cullell Ortega", "test.txt");



// Ejecicio 3
// Creu una altra que imprimeixi per pantalla el que llegeixi d'un fitxer.

const {readFile} = require("fs");

const readContentFile = (file) => readFile(file, "utf8", (err, data) => {
    if(err) throw err
    console.log(`Ejercicio 3: Reading data from ${file}: ${data}`);
});

readContentFile("test.txt");