const numeros = [8, 11, 4, 1];
let antes = 0;
let numeroMenor = 0;
let numeroMaior = 0;

for (let i = 0; i < numeros.length; i++) {
  antes = numeros[i];
  if (antes > numeroMaior) {
    numeroMaior = antes;
  }
  if (antes < numeroMaior) {
    numeroMenor = antes;
  }
}

let calculo = numeroMaior - numeroMenor;

console.log(calculo);
