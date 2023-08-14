const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000,
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000,
    },
  ],
  imprimirResumo() {
    console.log(`Tolta de itens: ${this.calcularTotalDeItens()} itens`);
    console.log(`Tolta a pagar: R$${this.calcularTotalAPagar().toFixed(2)}`);
  },
  addProduto(produto) {
    for (let i of this.produtos) {
      if (i.id === produto.id) {
        i.qtd += produto.qtd;
      } else {
        carrinho.produtos.push(produto);
        break;
      }
    }
  },

  imprimirDetalhes() {
    let itens = 0;
    let preco = 0;
    console.log(`Cliente: ${this.nomeDoCliente}`);

    for (let i of this.produtos) {
      itens++;
      console.log(
        `Item ${itens} - ${i.nome} - ${i.qtd} und - R$ ${(preco =
          (i.qtd * i.precoUnit) / 100).toFixed(2)}`
      );
    }
    this.imprimirResumo();
  },
  calcularTotalDeItens() {
    let totalDeItens = 0;
    for (let i of this.produtos) {
      totalDeItens += i.qtd;
    }
    return totalDeItens;
  },
  calcularTotalAPagar() {
    let preco = 0;
    let totalAPagar = 0;
    for (let i of this.produtos) {
      preco = i.qtd * i.precoUnit;
      totalAPagar += preco / 100;
    }
    return totalAPagar;
  },

  calcularDesconto() {
    let menor = this.produtos[0].precoUnit;
    let descontoItens = 0;
    let descontoPreco = 0;
    let desconto = 0;
    if (this.calcularTotalDeItens() > 4) {
      for (let i of this.produtos) {
        if (i.qtd > 1 && i.precoUnit < menor) {
          menor = i.precoUnit;
        }
      }
      descontoItens = menor / 100;
    }

    if (this.calcularTotalAPagar() > 100) {
      let preco = this.calcularTotalAPagar();
      descontoPreco = preco * 0.1;
    }

    if (descontoItens > descontoPreco) {
      desconto = descontoItens;
      console.log(
        `Com ${this.calcularTotalDeItens()} itens, o desconto deverá ser de R$ ${descontoItens.toFixed(
          2
        )}`
      );
    } else if (descontoPreco > descontoItens) {
      desconto = descontoPreco;
      console.log(`O desconto sera de R$ ${descontoPreco.toFixed(2)}`);
    } else {
      desconto = descontoPreco;
      console.log(`O desconto sera de R$ ${descontoPreco.toFixed(2)}`);
    }
  },
};

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000,
};

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000,
};
carrinho.addProduto(novaBermuda);
carrinho.addProduto(novoTenis);
carrinho.imprimirDetalhes();
carrinho.calcularDesconto();
