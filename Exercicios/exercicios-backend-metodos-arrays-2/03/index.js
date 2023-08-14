const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"];

const checarLista = (lista) => {
  let resultado = lista.some((palavra) => {
    return palavra === "cerveja" || palavra === "vodka";
  });

  if (resultado) {
    console.log("Revise sua lista, joão. possui bebida com venda proibida!");
  } else {
    console.log("Tudo certo, vamos as compras!");
  }
};
checarLista(palavras);
