const texto = "Aprenda programar do zero na Cubos Academy";

function textoAmigavel(texto) {
  let textoNovo = "";
  let array = texto.split(" ");
  let novoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "") {
    } else {
      novoArray.push(array[i]);
    }
  }

  for (let i of novoArray) {
    let novoTexto = i.toLocaleLowerCase();
    textoNovo += novoTexto + "-";
  }
  textoNovo = textoNovo.substring(0, textoNovo.length - 1);
  console.log(textoNovo);
}
textoAmigavel(texto);
