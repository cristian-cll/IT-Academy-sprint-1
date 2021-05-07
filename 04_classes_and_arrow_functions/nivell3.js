//Ejercicio 1

function Car(brand, model, year, power) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.power = power;
}

let car1 = new Car("Ford", "Focus", 2007, 115);
console.log(car1)