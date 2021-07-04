//Ejercicio 1

class Car{
    constructor(brand, model, year, power) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.power = power;
    }
    showAntiquity(){
        return  "This car has " + ( new Date().getFullYear() - this.year ) + " years.";
    }

    getDetails(){
        return (
            `It's an ${this.brand}, model ${this.model}. \n` +
            `It has ${this.power} cv of engine and it was made in ${this.year}. \n` +
            this.showAntiquity() + "\n"
            );
        
    }
}

const car1 = new Car("Ford", "Focus", 2007, 115);
const car2 = new Car("Seat", "Ibiza", 2009, 140);
const car3 = new Car("Audi", "A4", 2016, 180);


console.log(car1.getDetails());
console.log(car2.getDetails());
console.log(car3.getDetails());
