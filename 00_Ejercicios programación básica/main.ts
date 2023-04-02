// Ejercicio 1

let a: number = 5;
let b: number = 6;

let c = Math.sqrt(a * a + b * b);

console.log("La hipotenusa es", c.toFixed(2));

// Ejercicio 2

function calcularRiesgo(estatura: number, peso: number, edad: number): string {
  const imc = peso / Math.pow(estatura, 2);
  let condicionRiesgo = "";

  if (edad < 45) {
    if (imc < 22.0) {
      condicionRiesgo = "bajo";
    } else {
      condicionRiesgo = "medio";
    }
  } else {
    if (imc < 22.0) {
      condicionRiesgo = "medio";
    } else {
      condicionRiesgo = "alto";
    }
  }

  return condicionRiesgo;
}

console.log(calcularRiesgo(1.73, 68, 23));

// Ejercicio 3

function sumaNumeros(numero: number) {
  let resultado: number = 0;
  for (let i = 1; i <= numero; i++) {
    resultado += i;
  }
  return resultado;
}

console.log(sumaNumeros(10));
