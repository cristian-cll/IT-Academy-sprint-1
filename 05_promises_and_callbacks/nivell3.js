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
        employees.map(function (employee) {
            if (employee.id === id) {
                return resolve(employee);
            }
        });
        reject(new Error(`This id: ${id} does not exists.`))
    });
}

const getSalario = (employee) => {
    return new Promise((resolve, reject) => {
        salaries.map(function (salary) {
            if (salary.id === employee.id) {
                return resolve(salary);
            }
        });
        reject(new Error(`This ${employee.name} does not exists.`))
    });
}

getEmpleado(3)
    .then(res => getSalario(res))
    .then(res => console.log(res))
    .catch(e => console.log(e))


//si no hay transformacion se puede evitar el array function y pasar la function del tiron
getEmpleado(3).then(getSalario).then(console.log).catch(console.error)