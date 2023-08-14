const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];
const nomeDoLivro = "Dom Quixote";

const procurar = (nomeLivro, livro) => {
  let indicie =
    1 +
    livro.findIndex((posicao) => {
      return posicao === nomeLivro;
    });

  console.log(`O livro está na posição ${indicie}`);
};

procurar("Dom Quixote", livros);
