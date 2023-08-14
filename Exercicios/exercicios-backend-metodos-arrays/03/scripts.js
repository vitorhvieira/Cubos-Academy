const nomes = [
  "Ford Ká",
  "Ranger",
  "Hilux",
  "Corola",
  "Fusca",
  "Chevete",
  "Brasilia",
];
const posicao = 3;

function encontrar(nomes, posicao) {
  let subsequentes = 3;
  carros = nomes.slice(posicao, posicao + subsequentes);
  console.log(carros.join(" - "));
}

encontrar(nomes, posicao);
