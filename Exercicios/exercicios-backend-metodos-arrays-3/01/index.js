const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];

const crescente = (numeros) => {
  let resultado = numeros.sort((a, b) => {
    return a - b;
  });
  console.log(resultado);
};

const decrescente = (numeros) => {
  let resultado = numeros.sort((a, b) => {
    return b - a;
  });
  console.log(resultado);
};

const crescenteUnicode = (numeros) => {
  let resultado = numeros.sort();
  console.log(resultado);
};

const crescenteAlfabetica = (frutas) => {
  let resultado = frutas.sort((a, b) => {
    return a.localeCompare(b);
  });
  console.log(resultado);
};

const decrescenteAlfabetica = (frutas) => {
  let resultado = frutas.sort((a, b) => {
    return b.localeCompare(a);
  });
  console.log(resultado);
};

const caractere = (frutas) => {
  let resultado = frutas.sort((a, b) => {
    return a.length - b.length;
  });
  console.log(resultado);
};

crescente(numeros);
decrescente(numeros);
crescenteUnicode(numeros);
crescenteAlfabetica(frutas);
decrescenteAlfabetica(frutas);
caractere(frutas);
