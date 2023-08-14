const celularDD = 7199918888;
const celular = 99918888;

function formatarNumero(celular) {
  let celularFormatado = celular.toString();

  if (celularFormatado.length === 10) {
    console.log(
      celularFormatado.replace(
        /(\d{0})?(\d{2})?(\d{1})?(\d{4})/,
        "$1($2) $3 $4-"
      )
    );
  } else if (celularFormatado.length === 8) {
    console.log(celularFormatado.replace(/(\d{1})?(\d{4})/, "$1 $2-"));
  }
}

formatarNumero(celularDD);
formatarNumero(celular);
