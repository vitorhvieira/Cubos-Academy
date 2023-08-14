const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

for (let i of filaDeFora) {
  if (filaDeDentro.length < 5) {
    filaDeDentro.push(i);
    filaDeFora.shift();
  }
}

console.log(filaDeDentro);
console.log(filaDeFora);
