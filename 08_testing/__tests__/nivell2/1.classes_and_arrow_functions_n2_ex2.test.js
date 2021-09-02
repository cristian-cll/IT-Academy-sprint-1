const Persona = require("../../app/nivell2/classes_and_arrow_functions_n2_ex2");

// Creu un mock que espiï les anomenades al constructor de la classe Persona i al seu mètode decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2
// SPYON MOCK WAY

describe("Create a new Persona and check his decirNombre method", () => {
    const person = new Persona("Cristiano");

    // Spying on the actual methods of the Person class
    // Using jest.spyOn() is the proper Jest way of mocking a single method and leaving the rest be.
    jest.spyOn(person, "decirNombre")

    it("Should return out the first name", () => {
      expect(person.decirNombre()).toEqual("Cristiano")
      expect(person.decirNombre).toHaveBeenCalledTimes(1)
    });
});