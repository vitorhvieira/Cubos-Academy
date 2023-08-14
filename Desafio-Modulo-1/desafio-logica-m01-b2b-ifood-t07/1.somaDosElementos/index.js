function solucao(lista) {
  let resultado = lista.reduce((acumulador, valor) => {
    return acumulador + valor;
  });
  console.log(resultado);
}
