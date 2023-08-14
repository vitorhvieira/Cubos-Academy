const rendaMensalEmCentavos = 150000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

if (
  rendaMensalEmCentavos >= 200000 &&
  mesesDecorridos <= 60 &&
  totalJaPagoPeloAluno < 1800000
) {
  let parcela = (rendaMensalEmCentavos / 100) * 0.18;
  console.log(` O valor da parcela desse mês é R$ ${parcela} reais`);
} else if (totalJaPagoPeloAluno >= 1800000 || mesesDecorridos > 60) {
  console.log("Quitado");
} else if (rendaMensalEmCentavos < 200000) {
  console.log(
    `O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`
  );
}
