const qualquer = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 100, 120, 34, 123, 245, 118,
];
const original = [5, 7, 10, 13, 17, 21, 26, 34, 100, 118, 245];

let arrayNovo = [];
for (let i = 0; i < qualquer.length; i++) {
  for (let y = 0; y < original.length; y++)
    if (qualquer[i] === original[y]) {
      if ((qualquer[i] >= 10 && qualquer[i] <= 20) || qualquer[i] >= 100) {
        arrayNovo.push(qualquer[i]);
      }
    }
}

console.log(arrayNovo);
