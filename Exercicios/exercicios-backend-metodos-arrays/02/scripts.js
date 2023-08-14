const nomes = ["Juninho", "Vidal", "Guido", "Dani", "Ruli", "Diego"];
const tamanhoDoGrupo = 4;

function divisao(nomes, tamanho) {
  if (tamanhoDoGrupo < nomes.length) {
    let grupo1 = nomes.splice(0, tamanho);
    let grupo2 = nomes.slice(0, tamanho);
    console.log(`Grupo 1: ${grupo1.join(", ")}`);
    console.log(`Grupo 2: ${grupo2.join(", ")}`);
  } else {
    let grupo1 = nomes.splice(0, tamanho);
    console.log(`Grupo 1: ${grupo1.join(", ")}`);
  }
}

divisao(nomes, tamanhoDoGrupo);
