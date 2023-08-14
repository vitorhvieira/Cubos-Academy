const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const inteiros = (numeros) => {
  let resultado = numeros.filter((numero) => {
    return numero % 2 === 0 && Number.isInteger(numero);
  });

  console.log(resultado);
};

inteiros(numeros);
