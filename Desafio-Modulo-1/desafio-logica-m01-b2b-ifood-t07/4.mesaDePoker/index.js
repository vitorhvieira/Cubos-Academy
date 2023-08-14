function solucao(min, max, valores) {
  let novoArray = [];
  for (let i of valores) {
    if (i >= min && i <= max) {
      novoArray.push(i);
    }
  }
  console.log(novoArray);
}
