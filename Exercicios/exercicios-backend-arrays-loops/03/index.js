const numeros = [54, 22, 14, 10, 284];

let posicao = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 10) {
    posicao = i;
    console.log(posicao);
  }
}

if (posicao === 0) {
  console.log("-1");
}
