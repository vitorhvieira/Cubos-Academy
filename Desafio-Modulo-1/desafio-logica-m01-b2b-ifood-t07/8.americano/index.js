function solucao(numeros) {
  let soma = numeros.reduce((acumalador, valor) => {
    return acumalador + valor;
  });
  let somaIndicie = 1;
  let indicie = 1;

  while (somaIndicie !== soma) {
    somaIndicie++;
    indicie++;
    if (indicie === numeros.length) {
      indicie = 0;
    }
  }

  if (indicie === 0) {
    indicie = numeros.length;
  }

  console.log(indicie);
}
