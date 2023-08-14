const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maior = (numeros) => {
  let resultado = numeros.reduce((acumulador, valorAtual) => {
    return valorAtual > acumulador ? valorAtual : acumulador;
  });
  console.log(resultado);
};

maior(numeros);
