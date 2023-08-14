const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

function clinica(pacientes, operacao, nomePaciente) {
  if (operacao === "atender") {
    pacientes.splice(0, 1);
    console.log(pacientes.join(", "));
  } else if (operacao === "agendar") {
    pacientes.splice(pacientes.length, 0, nomePaciente);
    console.log(pacientes.join(", "));
  }
}

clinica(pacientes, "agendar", "Vitor");
