function solucao(min, km) {
  let precoTotal = 0;
  let precoKm = 0;
  let precoMin = 0;
  if (km < 10) {
    precoKm = 70 * km;
  } else {
    precoKm = 10 * 70;
    precoKm = precoKm + 50 * (km - 10);
  }

  if (min > 20) {
    precoMin = 20 * 50;
    precoMin = precoMin + 30 * (min - 20);
  } else {
    precoMin = 50 * min;
  }

  precoTotal = precoKm + precoMin;
  console.log(precoTotal);
}
