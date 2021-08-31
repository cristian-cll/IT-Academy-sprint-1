//Ejercicio 1

let arrFn = [];


const count = () => {
        for (let i = 0; i < 10; i++) {
                console.log(i)
        }
}

const fillArray = () => {
        for (let i = 0; i < 10; i++) {
                arrFn.push(count);
        }
        return arrFn;
}



fillArray().forEach((fn, i) => {
        console.log("num.", i);
        fn();
});

console.log(arrFn);

//Ejercicio 2

const userName = "Cristian";

const getName = ((name) => {
        return console.log("Ejercicio 2: ", name)
})(userName);