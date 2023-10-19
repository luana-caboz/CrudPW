//pegando a string
let dadosUsuarioString = localStorage.getItem('pessoa');

//convertadno a strin em array de objetos
let dadosUsuario = JSON.parse(dadosUsuarioString);

let tbody = document.querySelector('#tbody');

dadosUsuario.forEach(pessoaItem => {
    let tr = document.createElement('tr');

    let tdNome = document.createElement('td');
    tdNome.innerHTML = pessoaItem.nome;
    tr.appendChild(tdNome)

    let tdDataNascimento = document.createElement('td');
    tdDataNascimento.innerHTML = pessoaItem.DataNascimento;
    tr.appendChild(tdDataNascimento)

    let tdCpf = document.createElement('td');
    tdCpf.innerHTML = pessoaItem.cpf;
    tr.appendChild(tdCpf)

    let tdEmail = document.createElement('td');
    tdEmail.innerHTML = pessoaItem.email;
    tr.appendChild(tdEmail)

    let tdSenha = document.createElement('td');
    tdSenha.innerHTML = pessoaItem.senha;
    tr.appendChild(tdSenha)

    let tdAlterar = document.createElement('td');
    let linkAlterar = document.createElement('a')
    linkAlterar.setAttribute('href', 'alterar.html?id=' + pessoaItem.id)
    linkAlterar.innerHTML = 'Alterar';
    tdAlterar.appendChild(linkAlterar)
    tr.appendChild(tdAlterar)

    let tdDeletar = document.createElement('td');
    let linkDeletar = document.createElement('a');
    linkDeletar.setAttribute('href', ' ')
    linkDeletar.innerHTML = 'Deletar';
    linkDeletar.addEventListener('click', () => {Deletar(pessoaItem.id)})
    tdDeletar.appendChild(linkDeletar)
    tr.appendChild(tdDeletar)

    tbody.appendChild(tr)
});


function Deletar(id){
    const response = dadosUsuario.filter(i => i.id != id)
    localStorage.setItem('pessoa', JSON.stringify(response));
}


