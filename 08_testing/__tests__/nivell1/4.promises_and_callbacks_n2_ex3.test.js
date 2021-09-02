const { getEmpleado, getSalario } = require("../../app/nivell1/promises_and_callbacks_n2_ex3");

// Creu els tests corresponents per a verificar el funcionament de l'exercici Promises & Callbacks Nivell 2 - Exercici 3

describe("Get employee by id", () => {

    // ASYNC/AWAIT WAY
    it("The employee with id 1 exists and returns the employee object", async () => {
        const empleado = await getEmpleado(1)
        expect(empleado)
            .toMatchObject({ id: 1, name: 'Linux Torvalds' });

        const salario = await getSalario(empleado);
        expect(salario)
            .toMatchObject({ id: 1, salary: 4000 });
    });

    // PROMISES WAY
    it("The employee with id 1 exists and returns the object", () => {
        const empleado = () => getEmpleado(1)
            .then(employee => {
                expect(employee)
                    .toMatchObject({ id: 1, name: 'Linux Torvalds' });
                getSalario(employee).then(salary => {
                    expect(salary)
                        .toMatchObject({ id: 1, salary: 4000 });
                })
            })

        return Promise.all([empleado()]);

    });

});