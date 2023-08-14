const numeros = [0, 122, 4, 6, 7, 8, 44];

const pares = (numero) => {
  let resultado = numero.every((pares) => {
    return pares % 2 === 0;
  });

  if (resultado) {
    console.log("Array válido");
  } else {
    console.log("Array inválido");
  }
};

pares(numeros);
