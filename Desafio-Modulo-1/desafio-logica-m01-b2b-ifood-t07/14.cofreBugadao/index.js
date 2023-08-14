function processData(input) {
  let formatacao = input.replaceAll("\n", " ");
  let palavras = formatacao.split(" ");
  let senha = palavras[0];
  let palavra = palavras[1];

  let indicie = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (indicie < senha.length && palavra[i] === senha[indicie]) {
      indicie++;
    }
  }

  if (indicie === senha.length) {
    console.log("SIM");
  } else {
    console.log("NAO");
  }
}
