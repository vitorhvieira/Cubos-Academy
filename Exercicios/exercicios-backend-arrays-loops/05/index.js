const original = [1, 4, 12, 21, 53, 88, 112];
let novoArray = [];

for (let pares of original) {
  if (pares % 2 === 0) {
    novoArray.push(pares);
  }
}

console.log(novoArray);
