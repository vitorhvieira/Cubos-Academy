const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

function modifica(frutas) {
  let reverse = frutas.reverse();
  reverse = reverse.join(", ");
  console.log(reverse);
}

function remove(frutas) {
  frutas.splice(0, 1);
  frutas.splice(frutas.length - 1, 1, "Melão");
  console.log(frutas);
}
remove(frutas);
