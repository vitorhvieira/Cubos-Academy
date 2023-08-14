const comentario = "Esse covid é muito perigoso!";
const array = comentario.split(" ");

let palavraProibida = false;

for (let palavras of array) {
  let palavra = palavras.toUpperCase();

  if (palavra === "COVID" || palavra === "PANDEMIA") {
    palavraProibida = true;
    break;
  }
}

if (palavraProibida) {
  console.log("Comentário bloqueado por conter palavras proibidas");
} else {
  console.log("Comentário autorizado");
}
