//Ejercicio 1
let arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(function count() {
        document.writeln(`vez número ${i}`)
        for (let i = 0; i <= 9; i++) {
            document.writeln(`<p>${i}</p>`)
        }
    });
}

for (let i = 0; i < arr.length; i++) {
    arr[i]();
}

//Ejecicio 2
let userName = "Cristian";

let name = (function (name) {
    return document.writeln(name)
})(userName);