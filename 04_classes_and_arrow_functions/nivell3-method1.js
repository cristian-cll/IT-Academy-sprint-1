// Objects creator function, abstracting the class definition
const Vehicle = function (year) {
    this.year = year;
    if (this.constructor === Vehicle) {
        throw new Error("Can't instantiate abstract class!");
    }
};

// Abstract method
Vehicle.prototype.showAntiquity = function () {
    throw new Error("Abstract method!");
}


// ***** Inheriting from the object creator function ***** /

const Car = function () {
    Vehicle.apply(this, arguments);
};

// Create a prototype from Vehicle
Car.prototype = Object.create(Vehicle.prototype);
// Create a constructor to the previous prototype
Car.prototype.constructor = Car;

Car.prototype.showAntiquity = function () {
    console.log("This car has " + (new Date().getFullYear() - this.year) + " years.");
}

var Ford = new Car(1990);
Ford.showAntiquity();

// const Audi = new Vehicle(); // This throw -> Can't instantiate abstract class!

console.log(Car instanceof Vehicle);
console.log(Ford instanceof Car);