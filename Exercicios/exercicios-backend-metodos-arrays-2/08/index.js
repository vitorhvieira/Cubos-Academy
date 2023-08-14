const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const modifica = (frutas) => {
  let resultado = frutas.map((objt) => {
    let restante = objt.toLowerCase();
    let comeco = objt[0].toLocaleUpperCase();
    let novoArray = comeco + restante.substring(1);
    return novoArray;
  });

  let cons = [];
  for (let i = 0; i < resultado.length; i++) {
    cons.push(i + " - " + resultado[i]);
  }

  console.log(cons);
};

modifica(frutas);
