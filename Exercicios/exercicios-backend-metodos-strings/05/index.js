const numeroCartao = "1111222233334444";

let cartaoFormatado = numeroCartao.replace(
  numeroCartao.slice(4, 12),
  "********"
);

console.log(cartaoFormatado);
