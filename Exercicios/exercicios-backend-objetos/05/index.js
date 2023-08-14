const curso = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [],
};

const aula = [
  {
    identificador: 1,
    nome_da_aula: "Introdução a programação",
  },
  {
    identificador: 2,
    nome_da_aula: "Variáveis",
  },
  {
    identificador: 3,
    nome_da_aula: "Condicionais",
  },
  {
    identificador: 4,
    nome_da_aula: "Arrays",
  },
];

for (let i of aula) {
  if (aula.length > 0) {
    curso.aulas.push(i);
  }
}

console.log(curso);
