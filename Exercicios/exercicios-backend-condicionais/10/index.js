const caractere = "E";

const numero = ["1", "2", "3", "4", "5", "6", "7", "9", "0"];
const vogalMaiuscula = ["A", "E", "I", "O", "U"];
const vogalMinuscula = ["a", "e", "i", "o", "u"];
const consoanteMinuscula = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const consoanteMaiuscula = [
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

if (vogalMaiuscula.includes(caractere)) {
  console.log("Vogal Maiúscula");
} else if (vogalMinuscula.includes(caractere)) {
  console.log("Vogal Minúscula");
} else if (consoanteMaiuscula.includes(caractere)) {
  console.log("Consoante Maiúscula");
} else if (consoanteMinuscula.includes(caractere)) {
  console.log("Consoante Minúscula");
} else if (numero.includes(caractere)) {
  console.log("Numero");
} else {
  console.log("Caractere Invalido");
}
