"use strict";
// Ejercicio 1
const arrayEjemplo = [12, 21, 8, 4];
function menorMayorPromedio(array) {
    let menor = array[0];
    let mayor = 0;
    let total = 0;
    let promedio = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
        else if (array[i] < menor) {
            menor = array[i];
        }
        total += array[i];
    }
    promedio = total / array.length;
    return `El número mayor es ${mayor}, el menor es ${menor} y el promedio es ${promedio}`;
}
console.log(menorMayorPromedio(arrayEjemplo));
//Ejercicio 2
let a = [0, 2, 4, 6, 8, 10];
let b = ["a", "b", "c", "d", "e", "f"];
let c = [];
function addArrays(arrayA, arrayB) {
    for (let i = 0; i < arrayA.length; i++) {
        c.push(arrayB[i] + arrayA[i]);
    }
    return c;
}
console.log(addArrays(a, b));
