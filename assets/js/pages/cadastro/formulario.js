function maskCpf(event) {
  let cpf = event.target;
  cpf.value = cpf.value.replace(/\D/g, ""); // remove não-números
  cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2");
  cpf.value = cpf.value.replace(/(\d{3})(\d)/, "$1.$2");
  cpf.value = cpf.value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function maskPhone(event) {
  let phone = event.target;
  phone.value = phone.value.replace(/\D/g, "");
  phone.value = phone.value.replace(/^(\d{2})(\d)/g, "($1) $2");
  phone.value = phone.value.replace(/(\d{5})(\d{4})$/, "$1-$2");
}

function maskCep(event) {
  let cep = event.target;
  cep.value = cep.value.replace(/\D/g, "");
  cep.value = cep.value.replace(/(\d{5})(\d{3})$/, "$1-$2");
}

function applyMasks() {
  const cpf = document.getElementById("cpf");
  const phone = document.getElementById("phone");
  const cep = document.getElementById("cep");

  if (cpf) cpf.addEventListener("input", maskCpf);
  if (phone) phone.addEventListener("input", maskPhone);
  if (cep) cep.addEventListener("input", maskCep);
}

export { applyMasks };
