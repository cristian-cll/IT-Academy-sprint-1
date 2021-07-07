// Ejercicio 1
// Creu una funció que comprimeixi el file del nivell 1

const {createReadStream, createWriteStream} = require("fs");
const {createGzip} = require("zlib");


const compressFile = (file, ext) => {

    console.log(`Compressing ${file} into ${ext}...`);
    createReadStream(file)
        .pipe(createGzip())
        .pipe(createWriteStream(`${file}.${ext}`))
        .on("finish", () => console.log("Successfully compressed"));
}


compressFile("test.txt", "zip");


// Creu una funció que llisti per consola el contingut del directori d'usuari. Utilitzi node Child Processes.

const exec = require('child_process').exec;  
const homedir = require('os').homedir()
const path = require('path');


const showUserDir = () => {
    exec("dir", {cwd: path.join(homedir)}, (err, stdout, stderr) => {  
    if (err) {  
        console.error(err);  
        return;  
    }  
    console.log(stdout);  
    });  
}

showUserDir();



// Interesting: to use the explorer to open a folder with child_proceess
/* function fileExplorer() {
    const spawn = require('child_process').spawn;
    spawn('C:\\Windows\\explorer.exe', {cwd: path.join(homedir)});
}

fileExplorer() */