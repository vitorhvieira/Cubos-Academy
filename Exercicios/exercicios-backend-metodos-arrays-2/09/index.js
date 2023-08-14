const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const inteiros = (numeros) => {
  let resultado = numeros.filter((numero) => {
    return numero > 0 && Number.isInteger(numero);
  });

  console.log(resultado);
};

inteiros(numeros);
