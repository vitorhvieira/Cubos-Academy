const jogada1 = "pedra";
const jogada2 = "tesoura";

const pedra = "pedra";
const papel = "papel";
const tesoura = "tesoura";

if (jogada1 === jogada2) {
  console.log("Empate");
} else if (
  (jogada1 === pedra && jogada2 === tesoura) ||
  (jogada1 === tesoura && jogada2 === pedra)
) {
  console.log(`Pedra`);
} else if (
  (jogada1 === tesoura && jogada2 === papel) ||
  (jogada1 === papel && jogada2 === tesoura)
) {
  console.log("Tesoura");
} else if (
  (jogada1 === papel && jogada2 === pedra) ||
  (jogada1 === pedra && jogada2 === papel)
) {
  console.log("Papel");
} else {
  console.log("Jogada Invalida");
}
