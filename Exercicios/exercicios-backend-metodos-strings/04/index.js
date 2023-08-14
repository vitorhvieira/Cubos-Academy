let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

identificador = identificador.padStart(6, "0");
email = email.trim();

let arryNome = nome.split(" ");
let novoNome = "";

for (let i of arryNome) {
  let primeiraLetra = i.slice(0, 1);
  let restanteNome = i.slice(1);
  novoNome += primeiraLetra.toUpperCase() + restanteNome + " ";
  nome = novoNome;
}

console.log(identificador);
console.log(nome);
console.log(email);
