const nomeArquivo = "Foto da Familia.png";

function checar(nomeArquivo) {
  if (
    nomeArquivo.slice(-3) === "jpg" ||
    nomeArquivo.slice(-4) === "jpeg" ||
    nomeArquivo.slice(-3) === "gif" ||
    nomeArquivo.slice(-3) === "png"
  ) {
    console.log("Arquivo válido");
  } else {
    console.log("Arquivo inválido");
  }
}

checar(nomeArquivo);
