const usuarios = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Ana",
    idade: 18,
  },
  {
    nome: "Beatriz",
    idade: 15,
  },
  {
    nome: "Carlos",
    idade: 16,
  },
  {
    nome: "Antonio",
    idade: 32,
  },
];

for (let i of usuarios) {
  if (i.idade > 17) {
    i.maior_idade = true;
  } else {
    i.maior_idade = false;
  }
}

console.log(usuarios);
