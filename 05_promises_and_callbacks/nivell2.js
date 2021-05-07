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
        employees.map(employee => {
            if (employee.id == id) {
                resolve(employee);
            }
        });
        reject(new Error(`This ${id} does not exists.`));
    });
}

getEmpleado(1)
    .then(res => console.log(res))
    .catch(e => console.log(e))

//Ejercicio 2
//Example of employee for getSalario()
let Cristian = {
    id: 2,
    name: 'Cristian'
};

const getSalario = (employee) => {
    return new Promise((resolve, reject) => {
        salaries.map(salary => {
            if (salary.id === employee.id) {
                resolve(salary);
            }
        });
        eject(new Error(`This ${employee.name} does not exists.`));
    });
}

getSalario(Cristian).then(res => console.log("test employee", res))

//Ejercicio 3
getEmpleado(1)
    .then(res => getSalario(res))
    .then(res => console.log(res))
    .catch(e => console.log(e))
