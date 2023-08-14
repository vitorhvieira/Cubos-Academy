const nomes = ["Ana", "Joana", "Carlos", "amanda"];
let novoArray = [];

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i].toLowerCase().startsWith("a")) {
    novoArray.push(nomes[i]);
  }
}

console.log(novoArray);
