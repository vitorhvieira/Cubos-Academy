const cpf = "12345678900";
const cnpj = "12345678000199";

function formatarCPF(cpf) {
  if (cpf.length == 11) {
    let cpfFormatado = cpf.replace(
      /(\d{3})?(\d{3})?(\d{3})?(\d{2})/,
      "$1.$2.$3-$4"
    );
    console.log(cpfFormatado);
  } else {
    console.log("CPF Inválido");
  }
}

function formatarCNPJ(cnpj) {
  if (cnpj.length == 14) {
    let cnpjFormatado = cnpj.replace(
      /(\d{2})?(\d{3})?(\d{3})?(\d{4})?(\d{2})/,
      "$1.$2.$3/$4-$5"
    );
    console.log(cnpjFormatado);
  } else {
    console.log("CNPJ Inválido");
  }
}
formatarCPF(cpf);
formatarCNPJ(cnpj);
