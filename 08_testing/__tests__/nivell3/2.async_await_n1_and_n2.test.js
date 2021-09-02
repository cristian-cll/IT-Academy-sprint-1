const { getEmpleado, getSalario } = require("../../app/nivell3/async_await_n2_and_n3");

// Utilitzant com a base l'exercici Async / Await Nivells 2 i 3, creï un test que forci errors de funcionament i verifiqui que l'error llançat per la funció és l'esperat.

describe("Force error when getting the nonexistent employee", () => {

    test("The employee with id 8 does not exist and the getEmpleado promise is rejected", async () => {
        await expect(getEmpleado(8))
            .rejects
            .toMatch("No existe el empleado")
    });

});

describe("Force error when getting nonexistent employee salary", () => {

    test("The employee with id 8 does not exist and the salary promise is rejected", async () => {
        await expect(getSalario({ id: 8, name: 'Linux Torvalds' }))
            .rejects
            .toMatch("No existe el salario")
    });

});