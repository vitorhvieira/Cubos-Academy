const endereços = [
  { cep: 00111222, rua: "Rua dos Artistas" },
  { cep: 00111333, rua: "Rua Augusta" },
  { cep: 00222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const localizar = (enderecos, codigo) => {
  let resultado = enderecos.find((objt) => {
    return objt.cep === codigo;
  });

  console.log(resultado.rua);
};

localizar(endereços, 00222444);
