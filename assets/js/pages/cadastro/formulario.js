// Máscara de cp
function maskCpf() {
    let cpf = document.getElementById('cpf');

    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += '.';
    }

    if (cpf.value.length == 11) {
        cpf.value += '-';
    }
}

//  Máscara de telefone
function maskPhone() {
    let cpf = document.getElementById('phone');

    if (cpf.value.length == 2) {
        let aux = cpf.value;
        cpf.value = `(${aux}) `;
    }

    if (cpf.value.length == 10) {
        cpf.value += '-';
    }
}

function maskCep() {
    let cep = document.getElementById('cep');

    if (cep.value.length == 5) {
        cep.value += '-';
    }
}