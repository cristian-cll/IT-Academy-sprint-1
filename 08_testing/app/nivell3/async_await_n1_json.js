const getEmpleado = (id, employees) => {
    return new Promise((resolve, reject) => {
        const employee = employees.find(employee => employee.id === id);
        employee ? resolve(employee) : reject("No existe el empleado");
    });
}

const getSalario = (employee, salaries) => {
    return new Promise((resolve, reject) => {
        const salary = salaries.find(salary => salary.id === employee.id);
        salary ? resolve(salary) : reject("No existe el salario");
    });
}



module.exports = { getEmpleado, getSalario };