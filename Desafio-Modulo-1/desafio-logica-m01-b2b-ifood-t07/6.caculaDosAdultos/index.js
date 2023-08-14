function solucao(lista) {
  let resultado = lista.sort((a, b) => {
    return a - b;
  });

  let menorIdade = lista.find((menor) => {
    return menor >= 18;
  });

  if (menorIdade) {
    console.log(menorIdade);
  } else {
    console.log("CRESCA E APARECA");
  }
}
