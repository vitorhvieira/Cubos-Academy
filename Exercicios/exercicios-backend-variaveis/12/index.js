let montante = 90000;
let capitalInicial = 60000;
let meses = 24;

let taxaDeJuros = (
  (Math.pow(montante / capitalInicial, 1 / meses) - 1) *
  100
).toFixed(3);

console.log(
  `O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros}%, pois após ${meses} meses você teve que pagar ${montante} reais.`
);
