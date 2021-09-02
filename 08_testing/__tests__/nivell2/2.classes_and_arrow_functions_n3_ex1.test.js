const { Vehicle, Car } = require("../../app/nivell2/classes_and_arrow_functions_n3_ex1");

// Verifiqui mitjançant tests l'exercici Classes & Arrow Functions Nivell 3 - Exercici 1.

describe("Class abtraction in object creator function", () => {

    it("Should give an instance error", () => {

        // Note: You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail. https://jestjs.io/docs/expect#tothrowerror
        expect(() => {
            new Vehicle();
        }).toThrow(Error);
    });


    it("Should return the Car object: {year: 1990}", () => {
        expect(new Car(1990)).toMatchObject({ "year": 1990 });
    });

    it("Should return the age of the car: This car has 31 years.", () => {
        const Ford = new Car(1990);
        expect(Ford.showAntiquity()).toEqual("This car has 31 years.")
    });
});