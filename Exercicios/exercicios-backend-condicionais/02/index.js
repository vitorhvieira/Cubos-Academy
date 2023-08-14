const jogada1 = 5;
const jogada2 = 3;

if (
  (jogada1 % 2 == 0 && jogada2 % 2 == 0) ||
  (jogada1 % 2 == 1 && jogada2 % 2 == 1)
) {
  console.log("Par");
} else {
  console.log("Impar");
}
