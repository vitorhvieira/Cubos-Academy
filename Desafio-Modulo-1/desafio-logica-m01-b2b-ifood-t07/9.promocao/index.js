function solucao(precos) {
  if (precos.length <= 100) {
    let soma = precos.reduce((acumalador, valor) => {
      return acumalador + valor;
    });

    if (precos.length >= 3) {
      let menor = precos.sort((a, b) => {
        return a - b;
      });
      menor = menor[0];
      let promocao = soma - menor * 0.5;
      console.log(promocao);
    } else {
      console.log(soma);
    }
  }
}
