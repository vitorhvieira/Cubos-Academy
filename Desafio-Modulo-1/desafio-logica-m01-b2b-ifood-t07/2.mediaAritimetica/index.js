function solucao(lista) {
  let soma = lista.reduce((acumulador, valor) => {
    return acumulador + valor;
  });
  let resultado = soma / lista.length;

  console.log(resultado);
}
