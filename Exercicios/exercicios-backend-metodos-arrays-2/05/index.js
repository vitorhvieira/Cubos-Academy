const usuários = [
  {
    nome: "André",
    idade: 29,
    habilitado: false,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: true,
  },
];

const validacao = (usuarios) => {
  let filtragem = usuarios.filter((objt) => {
    return objt.idade >= 18 && objt.idade <= 65;
  });

  let validar = filtragem.every((habilitacao) => {
    return habilitacao.habilitado;
  });

  if (validar) {
    console.log("Todos passaram no teste");
  } else {
    console.log("Todos precisam estar habilitados");
  }
};

validacao(usuários);
