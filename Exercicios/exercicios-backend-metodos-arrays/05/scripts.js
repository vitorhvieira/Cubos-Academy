const pacientes = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];

function agendarPaciente(pacientes, nomePaciente) {
  pacientes.splice(pacientes.length, 0, nomePaciente);
  console.log(pacientes.join(", "));
}

function atenderPaciente(pacientes) {
  pacientes.splice(0, 1);
  console.log(pacientes.join(", "));
}

function cancelarAtendimento(pacientes, nomePaciente) {
  if (pacientes.indexOf(nomePaciente) >= 0) {
    pacientes.splice(pacientes.indexOf(nomePaciente), 1);
  }

  console.log(pacientes.join(", "));
}
agendarPaciente(pacientes, "Vitor");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, "Ana");
