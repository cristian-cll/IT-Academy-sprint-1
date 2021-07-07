const {writeDataInFile, readDataFile} = require("./files_library");

// Ejercicio 1
// Creu una funció que imprimeixi recursivamente un missatge per consola amb demores d'un segon.

const printMessage = () => {
    console.log("Ejercicio 1: Infinite Hello World. Say Hello!!");
    setTimeout(printMessage, 1000);
}

printMessage();

// Ejercicio 2
// Creu una funció que, en executar-la, escrigui el seu nom en un fitxer.

writeDataInFile("test.txt", "Cristian Cullell Ortega");
   

// Ejecicio 3
// Creu una altra que imprimeixi per pantalla el que llegeixi d'un fitxer.

readDataFile("test.txt");
