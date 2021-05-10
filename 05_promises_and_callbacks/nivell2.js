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
    return new Promise((resolve) => {
        for(employee of employees){
            if(employee.id === id){
                resolve(employee)
            }
        }
    });
}

getEmpleado(1)
    .then(res => console.log("Ejercicio 1", res))

//Ejercicio 2
//Example of employee for getSalario()
let Cristian = {
    id: 2,
    name: 'Cristian'
};

const getSalario = (employee) => {
    return new Promise((resolve) => {
        salaries.map(salary => {
            if (salary.id === employee.id) {
                resolve(salary);
            }
        });
    });
}

getSalario(Cristian).then(res => console.log("Ejercicio 2. Test employee", res))

//Ejercicio 3
getEmpleado(1)
    .then(res => getSalario(res))
    .then(res => console.log("Ejercicio 3", res))
