const nome = "Guido Cerqueira";

function nickName(nome) {
  nome.padStart(1, "@");
  nome = nome.toLowerCase();
  nome = nome.replace(" ", "");
  nome = "@" + nome;

  console.log(nome.substr(0, 13));
}

nickName(nome);
