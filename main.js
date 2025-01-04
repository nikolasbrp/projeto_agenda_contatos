const form = document.getElementById('form-contato');
const nome = document.getElementById('nome-contato');
const telefone = document.getElementById('telefone-contato');
const tabela = document.getElementById('table-contato');
const nomesContatos = [];
const telefonesContatos = [];

let linhas = '';

atualizaQuantidadeContatos();

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeValor = nome.value.trim();
    const telefoneValor = telefone.value.trim();

    if (nomesContatos.includes(nomeValor)) {
        alert(`O contato ${nomeValor} já foi cadastrado!`);
    } else if (telefonesContatos.includes(telefoneValor)) {
        alert(`O telefone ${telefoneValor} já foi cadastrado!`);
    } else {
        nomesContatos.push(nomeValor);
        telefonesContatos.push(telefoneValor);

        let linha = `
            <tr>
                <td>${nomeValor}</td>
                <td>${telefoneValor}</td>
            </tr>
        `;

        linhas += linha;

        atualizaTabela();
        atualizaQuantidadeContatos();        

        nome.value = '';
        telefone.value = '';
    }        
});

function atualizaTabela() {
    tabela.innerHTML = linhas;
}

function atualizaQuantidadeContatos() {
    const footerTabela = document.getElementById('table-rodape');
    const quantidade = telefonesContatos.length;
    const plural = quantidade === 1 ? 'contato' : 'contatos';

    footerTabela.innerHTML = `Sua agenda possui <b>${quantidade}</b> ${plural}`;
}
