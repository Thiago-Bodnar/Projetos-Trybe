const estados = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MS',
    'MT',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
]
const select = document.getElementById('estado-select');

adicionaEstados();

function adicionaEstados() {
    for (let i = 0; i < estados.length; i += 1) {
        const criaOption = document.createElement('option');
        criaOption.innerText = estados[i];
        select.appendChild(criaOption);
    }
}