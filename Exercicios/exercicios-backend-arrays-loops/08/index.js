const numeros = [3, 4, 1, 8, 11, 7, 5];

let antes = 0;
let depois = 0;

for (let i = 0; i < numeros.length; i++) {
  let antes = numeros[i];
  if (antes > depois) {
    depois = antes;
  }
}
console.log(depois);
