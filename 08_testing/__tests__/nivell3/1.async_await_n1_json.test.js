const employees = require("../../app/nivell3/__mocks__/employees.json");
const salaries = require("../../app/nivell3/__mocks__/salaries.json");
const { getEmpleado, getSalario } = require("../../app/nivell3/async_await_n1_json");

// Creu l'exercici Async / Await Nivell 1 accedint a un fitxer extern JSON. Creu tests que demostrin la correcta execució de l'exercici mockeando el fitxer JSON.

jest.mock('../../app/nivell3/__mocks__/employees.json', () => ([
    {
        id: 1,
        name: 'Linux Torvalds'
    }, {
        id: 2,
        name: 'Bill Gates'
    }, {
        id: 3,
        name: 'Jeff Bezos'
    }
]), { virtual: true })

jest.mock('../../app/nivell3/__mocks__/salaries.json', () => ([
    {
        id: 1,
        salary: 4000
    }, {
        id: 2,
        salary: 1000
    }, {
        id: 3,
        salary: 2000
    }
]), { virtual: true })


describe("Get employee by id", () => {
    test("The employee with id 1 exists and returns the employee object", async () => {
        expect(await getEmpleado(1, employees))
            .toMatchObject({ id: 1, name: 'Linux Torvalds' });
    });

    test("The employee with id 8 does not exist and the getEmpleado promise is rejected", async () => {
        await expect(getEmpleado(8, employees))
            .rejects
            .toMatch("No existe el empleado")
    });

});

describe("It should find the employee's salary", () => {
    test("The employee with id 1 exists and returns his salary (object)", async () => {
        expect(await getSalario({ id: 1, name: 'Linux Torvalds' }, salaries))
            .toMatchObject({ id: 1, salary: 4000 });
    });

    test("The employee with id 8 does not exist and the salary promise is rejected", async () => {
        await expect(getSalario({ id: 8, name: 'Linux Torvalds' }, salaries))
            .rejects
            .toMatch("No existe el salario")
    });

});