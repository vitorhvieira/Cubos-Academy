//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if (valorDoProduto / 100 != valorPago) {
  let calculo = valorDoProduto / 100 / quantidadeDoParcelamento;
  let parcelas = (valorDoProduto / 100 - valorPago) / calculo;
  console.log(`Restam ${parcelas} parcelas de R$${calculo}`);
} else {
  console.log("Quitado");
}
