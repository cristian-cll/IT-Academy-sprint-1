//Ejercicio 1
const ageFunc = age => ({ age: age });
console.log(ageFunc(15));

//Ejercicio 2
class Persona {
    constructor(nom) {
        this.nom = nom;
    }
    decirNombre() {
        console.log(this.nom);
    }
}

const alumno1 = new Persona("Cristian");
alumno1.decirNombre();