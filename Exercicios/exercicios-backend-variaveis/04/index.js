let capital = 1000;
let taxaFixa = 12.5;
let tempo = 5;
let montante = (capital * Math.pow(1 + taxaFixa / 100, tempo)).toFixed(0);

console.log(`Com um capital de R$${capital}, taxa de ${taxaFixa}%a.m durante ${tempo} meses gera um montante de R$${montante}`);
