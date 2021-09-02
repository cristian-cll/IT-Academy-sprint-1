const Persona = require("../../app/nivell2/classes_and_arrow_functions_n2_ex2");

// Creu un mock que espiï les anomenades al constructor de la classe Persona i al seu mètode decirNombre en l'exercici Classes & Arrow Functions - Nivell 2 Exercici 2
// MOCK WAY 

jest.mock("../../app/nivell2/classes_and_arrow_functions_n2_ex2", function () {
    const mockRealPerson = jest.requireActual('../../app/nivell2/classes_and_arrow_functions_n2_ex2');

    mockRealPerson.prototype.decirNombre = () => "Cristian";
    return mockRealPerson
});


describe("Create a new Persona and check his decirNombre method", () => {

    it("Should return out the first name", () => {
        const person = new Persona();
        expect(person.decirNombre()).toBe("Cristian");
    });
});