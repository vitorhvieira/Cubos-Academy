const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const filtro = (cidades) => {
  let resultado = cidades.filter((cidade) => {
    return cidade.length <= 8;
  });

  console.log(resultado.join(", "));
};

filtro(cidades);
