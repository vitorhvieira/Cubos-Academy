const contaBancaria = {
  nome: "Maria",
  saldo: 0,
  historicos: [],
  depositar(valor) {
    this.saldo += valor;
    console.log(
      `Deposito de R$ ${valor / 100} realizado para o cliente: ${this.nome}`
    );
    this.historicos.push({ tipo: "Deposito", valor });
  },
  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
      this.historicos.push({ tipo: "Saque", valor });
      console.log(
        `Saque de R$ ${valor / 100} realizado para o cliente: ${this.nome}`
      );
    } else {
      console.log(`Saldo insuficiente para o saque de: ${this.nome}`);
    }
  },
  extrato() {
    console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}`);
    console.log(`Historico:`);
    for (let i of this.historicos) {
      console.log(`${i.tipo} de $${i.valor / 100}`);
    }
  },
};

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();
