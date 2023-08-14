const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

const novoPedido = "pedido 15";

for (let i = 0; i < filaDePedidos.length; i++) {
  if (novoPedido && filaDePedidos.length - 1 <= i) {
    filaDePedidos.shift();
    filaDePedidos.push(novoPedido);
  }
}

console.log(filaDePedidos);
