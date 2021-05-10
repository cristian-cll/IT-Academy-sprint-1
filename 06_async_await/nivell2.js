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
        setTimeout(()=>{
            for (employee of employees){
                if(employee.id === id){
                    return resolve(employee);
                }
            }
        },2000);
    });
}

const getSalario = (employee) => {
    return new Promise((resolve) => {
        for (salary of salaries){
            if(employee.id === salary.id){
                resolve(salary)
            }
        }
    });
}

async function showData(id){
    const empleado = await getEmpleado(id);
    const salario = await getSalario(empleado);

    console.log(empleado);
    console.log(salario);
}


showData(2);