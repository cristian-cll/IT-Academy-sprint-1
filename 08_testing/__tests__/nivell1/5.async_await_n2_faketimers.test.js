const { getEmpleado, getSalario } = require("../../app/nivell1/async_await_n2");

// Verifiqui l'execució mediantes tests de l'exercici Async / Await Nivell 2 Exercici 1 utilitzant Jest Fake Timers.

describe("Get employee by id", () => {

    it('The employee with id 1 exists and returns the employee object', async () => {
        jest.useFakeTimers();

        const asyncResult = getEmpleado(1);
        jest.runAllTimers();
        const r = await asyncResult;
        expect(r).toMatchObject({ id: 1, name: 'Linux Torvalds' });
    });

    it("The employee with id 8 does not exist and the getEmpleado promise is rejected", async () => {
        jest.useFakeTimers();

        const asyncResult = getEmpleado(8);
        jest.runAllTimers();
        const r = asyncResult;
        await expect(r).rejects.toMatch("No existe el empleado");
    });

});


describe("It should find the employee's salary", () => {

    it("The employee with id 1 exists and returns his salary (object)", async () => {
        jest.useFakeTimers();

        const asyncResult = getSalario({ id: 1, name: 'Linux Torvalds' });
        jest.runAllTimers();
        const r = await asyncResult;
        expect(r).toMatchObject({ id: 1, salary: 4000 });

    });

    it("The employee with id 8 does not exist and the salary promise is rejected", async () => {
        jest.useFakeTimers();

        const asyncResult = getSalario({ id: 8, name: 'Linux Torvalds' });
        jest.runAllTimers();
        const r = asyncResult;
        await expect(r).rejects.toMatch("No existe el salario");

    });

});