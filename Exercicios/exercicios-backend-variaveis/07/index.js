let populacaoInicial = 1000;
let quantidadePessoa = 4;
let tempo = 100;

let populacaoInfectada =
  populacaoInicial * Math.pow(quantidadePessoa, tempo / 7);

console.log(`Com uma população inicial de infectados de ${populacaoInicial} pessoas e a cada ${quantidadePessoa} de pessoas infectadas durante um período de ${tempo} dias. É possível chegar em um total de ${populacaoInfectada} de pessoas infectadas.` );
