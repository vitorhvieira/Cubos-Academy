const email = ".messias@cubos";

let arroba = email.indexOf("@");
let ponto = email.indexOf(".");

if (
  email.lastIndexOf(".") === email.length - 1 ||
  ponto === -1 ||
  arroba === -1 ||
  email[0] === "@" ||
  email[0] === "."
) {
  console.log("Email Invalido");
} else {
  console.log("Email valido");
}
