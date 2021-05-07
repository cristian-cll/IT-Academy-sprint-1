//Ejercicio 1
const getPromise = (age) => {
    return new Promise((resolve, reject) => {
        age < 18 ? reject(new Error("Eres menor de edad")) : resolve("Eres mayor de edad");
    });
}

getPromise(19)
    .then(respuesta => console.log(respuesta))
    .catch(error => console.log(error))

//Ejercicio 2
const validateAge = (num, cb) => {
    let msg;
    num >= 18 ? msg = "Mayor de edad" : msg = "Menor de edad";
    cb(msg);
}
validateAge(17, (msg) => console.log(msg));