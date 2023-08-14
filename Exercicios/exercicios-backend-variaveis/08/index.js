let raio = 1;

let comprimento = (2 * Math.PI * raio).toFixed(2);
let area = (Math.PI * Math.pow(raio, 2)).toFixed(2);

console.log(
  `A partir do círculo com raio=${raio}. Podemos obter o comprimento=${comprimento} e área=${area} do círculo.`
);
