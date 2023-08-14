let valorAtual = 80;
let precoTotal = 129.99;
let valorRestante = (precoTotal - valorAtual).toFixed(2);
let valorDesconto = ((valorRestante * 100) / precoTotal).toFixed(2);

console.log(
  `De acordo com o valor possuído de R$ ${valorAtual} e o preço do tênis é de R$ ${precoTotal}. O valor que falta para efetuar a compra é de R$ ${valorRestante}. Ou seja, o desconto necessário será de ${valorDesconto}%`
);
