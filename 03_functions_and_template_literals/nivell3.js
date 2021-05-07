//Ejercicio 1
let name = "Cristian";
let surname = "Cullell";

document.writeln(`<p>Mi nombre es ${name} y mi primer apellido es ${surname}.</p>`);

//Ejercicio 2
function printName(name, surname) {
        return `<p>Mi nombre es ${name} y mi primer apellido es ${surname}.</p>`;
}

document.writeln(`${printName("Juan", "Carrasco")}`);