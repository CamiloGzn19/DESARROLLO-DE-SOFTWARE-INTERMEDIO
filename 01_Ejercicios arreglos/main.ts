// Ejercicio 1

const arrayEjemplo: number[] = [12, 21, 8, 4];

function menorMayorPromedio(array: number[]) {
  let menor: number = array[0];
  let mayor: number = 0;
  let total: number = 0;
  let promedio: number = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > mayor) {
      mayor = array[i];
    } else if (array[i] < menor) {
      menor = array[i];
    }
    total += array[i];
  }

  promedio = total / array.length;

  return `El número mayor es ${mayor}, el menor es ${menor} y el promedio es ${promedio}`;
}

console.log(menorMayorPromedio(arrayEjemplo));

//Ejercicio 2

let a: number[] = [0, 2, 4, 6, 8, 10];
let b: string[] = ["a", "b", "c", "d", "e", "f"];
let c: string[] = [];
function addArrays(arrayA: number[], arrayB: string[]) {
  for (let i = 0; i < arrayA.length; i++) {
    c.push(arrayB[i] + arrayA[i]);
  }
  return c;
}

console.log(addArrays(a, b));
