const {sum, subtract, multiplication, division} = require("../../app/nivell1/mathcrud");

// Creu un arxiu amb les funcions sumar, restar, multiplicar i dividir 2 o més operands. Testi la correcta execució d'aquestes funcions.

describe("Sum two numbers", () => {
    test("1 + 2 = 3", () => {
        expect(sum(1, 2)).toBe(3);
    });
});

describe("Subtract two numbers", () => {
    test("3 - 2 = 3", () => {
        expect(subtract(3, 2)).toBe(1);
    });
});

describe("Multiply two numbers", () => {
    test("3 * 2 = 6", () => {
        expect(multiplication(3, 2)).toBe(6);
    });
});

describe("Divide two numbers", () => {
    test("5 / 5 = 1", () => {
        expect(division(5, 5)).toBe(1);
    });
});