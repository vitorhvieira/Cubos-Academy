function processData(input) {
  let formatacao = input.replaceAll("\n", " ");
  let array = formatacao.split(" ");
  let conversaoParaNumero = array.map(Number);
  let novoArray = [];
  let resultadoDistancia = 0;

  for (let i = 0; i < conversaoParaNumero[0]; i++) {
    let array2 = conversaoParaNumero.splice(1, 2);
    novoArray.push(array2);
  }

  function distancia(xA, yA, xB, yB) {
    return Math.sqrt(Math.pow(xB - xA, 2) + Math.pow(yB - yA, 2));
  }

  for (let i = 0; i < novoArray.length; i++) {
    for (let j = 1; j < novoArray.length; j++) {
      let resultado = distancia(
        novoArray[i][0],
        novoArray[i][1],
        novoArray[j][0],
        novoArray[j][1]
      );
      if (resultado > resultadoDistancia) {
        resultadoDistancia = resultado;
      }
    }
  }

  console.log(resultadoDistancia);
}
