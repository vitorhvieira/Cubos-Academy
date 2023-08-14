const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

function encontrar(usuarios, pet) {
  for (let i of usuarios) {
    if (i.pets.includes(pet) && i.nome !== "") {
      console.log(`O dono(a) do(a) ${pet} é o(a) ${i.nome}`);
    } else if (i.nome === "") {
      console.log(`Que pena ${pet}, não encontramos seu dono(a)`);
    }
  }
}

encontrar(usuarios, "Max");
