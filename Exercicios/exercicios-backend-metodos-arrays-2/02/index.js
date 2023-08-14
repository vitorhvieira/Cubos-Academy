const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const caractere = (palavra) => {
  let resultado = palavra.some((letras) => {
    return letras.length > 5;
  });

  if (resultado) {
    console.log("Existe palavra inválida");
  } else {
    console.log("Array validado");
  }
};

caractere(palavras);
