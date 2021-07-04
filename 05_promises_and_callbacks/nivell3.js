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


//Ejercicio 3
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find(employee => employee.id === id);
        employee ? resolve(employee) : reject("No existe el empleado");
    });
}

const getSalario = (employee) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(salary => salary.id === employee.id);
        salary ? resolve(salary) : reject("No existe el salario");
    });
}


getEmpleado(2)
    .then(employee => {getSalario(employee)
        .then(salary => console.log(`El sueldo de ${employee.name} es de ${salary.salary}`));
    })
    .catch((err) => console.log(err));


//si no hay transformacion se puede evitar el array function y pasar la function del tiron
// getEmpleado(3).then(getSalario).then(console.log).catch(console.error)