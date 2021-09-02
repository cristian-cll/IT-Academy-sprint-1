const { getEmpleado, getSalario } = require("../../app/nivell1/async_await_n1_ex1");

// Creu els tests corresponents per a verificar el funcionament de l'exercici Async / Await Nivell 1 - Exercici 1

describe("Get employee by id", () => {

    test("The employee with id 1 exists and returns the employee object", async () => {
        expect(await getEmpleado(1))
            .toMatchObject({ id: 1, name: 'Linux Torvalds' });
    });

    test("The employee with id 8 does not exist and the getEmpleado promise is rejected", async () => {
        await expect(getEmpleado(8))
            .rejects
            .toMatch("No existe el empleado")
    });

});

describe("Get employee's salary by employee object", () => {

    test("The employee with id 1 exists and returns his salary (object)", async () => {
        expect(await getSalario({ id: 1, name: 'Linux Torvalds' }))
            .toMatchObject({ id: 1, salary: 4000 });
    });

    test("The employee with id 8 does not exist and the salary promise is rejected", async () => {
        await expect(getSalario({ id: 8, name: 'Linux Torvalds' }))
            .rejects
            .toMatch("No existe el salario")
    });

});