//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 2;

let risco = "";

if (quantidadeDeAguaIngerida < 1.5) {
  risco = "ALTO";
  console.log(
    `Risco ${risco} - Você está ingerindo pouquissima água, beba mais água!`
  );
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
  risco = "MODERADO";
  console.log(`Risco ${risco} - Você está ingerindo pouca água, beba mais!`);
} else if (quantidadeDeAguaIngerida > 3) {
  risco = "BAIXO";
  console.log(
    `Risco ${risco} -  Você está ingerindo uma boa quantidade de água, parabéns!`
  );
}
