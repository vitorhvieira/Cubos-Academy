function solucao(jogadores) {
  let jogada1 = jogadores.filter((numero) => {
    return numero.jogada === 1;
  });

  let jogada0 = jogadores.filter((numero) => {
    return numero.jogada === 0;
  });

  if (jogada1.length === 1) {
    console.log(jogada1[0].nome);
  } else if (jogada0.length === 1) {
    console.log(jogada0[0].nome);
  } else {
    console.log("NINGUEM");
  }
}
