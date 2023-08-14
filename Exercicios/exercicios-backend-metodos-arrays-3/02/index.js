const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const maiorString = (cidades) => {
  let resultado = cidades.reduce((acumulador, valorAtual) => {
    return valorAtual.length > acumulador.length ? valorAtual : acumulador;
  });
  console.log(resultado);
};

maiorString(cidades);
