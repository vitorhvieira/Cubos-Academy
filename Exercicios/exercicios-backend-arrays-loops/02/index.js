const letras = ["A", "e", "B", "C", "E", "z"];

let checagem = false;
let contagem = 0;

for (let letra of letras) {
  if (letra === "E" || letra === "e") {
    contagem++;
    checagem = true;
  }
}

if (checagem) {
  console.log(`Foram encontradas ${contagem} letras 'E' ou 'e'.`);
} else {
  console.log("Nenhuma letra 'E' ou 'e' foi encontrada.");
}
