let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
}, {
    id: 3,
    name: 'Jeff Bezos'
}];

let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


//Ejercicio 1

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find(employee => employee.id === id);
        employee ? resolve(employee) : reject("No existe el empleado");
    });
}

getEmpleado(1)
    .then(employee => console.log("Ejercicio 1: ", employee))

//Ejercicio 2

const getSalario = (employee) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(salary => salary.id === employee.id);
        salary ? resolve(salary) : reject("No existe el salario");
    });
}

getSalario(employees[0])
    .then(salary => console.log("Ejercicio 2: ", salary))

//Ejercicio 3

getEmpleado(2)
    .then(employee => {getSalario(employee)
        .then(salary => console.log(`Ejercicio 3: El sueldo de ${employee.name} es de ${salary.salary}`));
    })
    .catch((err) => console.log(err));
