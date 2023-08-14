const cpf = "011.022.033-44";

function formatacao(texto, text, othertext, newText) {
  while (texto !== texto.replace(text, newText)) {
    texto = texto.replace(text, newText);
  }

  while (texto !== texto.replace(othertext, newText)) {
    texto = texto.replace(othertext, newText);
  }
  return texto;
}

console.log(formatacao(cpf, ".", "-", ""));
