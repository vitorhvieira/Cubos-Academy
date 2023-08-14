function solucao(texto) {
  let semEspaco = texto.trim();
  let novoArray = semEspaco.split(" ");
  let resultado = novoArray.filter((espaco) => {
    return espaco !== "";
  });
  console.log(resultado.length);
}
