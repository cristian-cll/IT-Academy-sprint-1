// Objects creator function, abstracting the class definition
const Vehicle = function (year) {
    this.year = year;
    throw new Error("Can't instantiate abstract class!");
};

Vehicle.prototype.showAntiquity = function () {
    return "This car has " + (new Date().getFullYear() - this.year) + " years.";
}

// Creating a constructor function  
function Car(year) {
    this.year = year;
}

// ***** Inheriting from the object creator function ***** /

// Create a prototype
Car.prototype = Object.create(Vehicle.prototype);
/* const Ford = new Car(1990);
console.log(Ford.showAntiquity());

// const Audi = new Vehicle() // This throw -> Can't instantiate abstract class!


console.log(Car instanceof Vehicle);
console.log(Ford instanceof Car); */

module.exports = {Vehicle, Car}