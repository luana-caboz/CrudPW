//pegando a string
let pessoaString = localStorage.getItem('pessoa');

//convertadno a strin em objeto
let pessoaObj = JSON.parse(pessoaString);

let tbody = document.querySelector('#tbody');

let arr = []
arr.push(pessoaObj)

arr.forEach(pessoaItem => {
    var tr = document.createElement('tr');

    var tdNome = document.createElement('td');
    tdNome.innerHTML = pessoaItem.nome;
    tr.appendChild(tdNome)

    var tdDataNascimento = document.createElement('td');
    tdDataNascimento.innerHTML = pessoaItem.DataNascimento;
    tr.appendChild(tdDataNascimento)

    var tdCpf = document.createElement('td');
    tdCpf.innerHTML = pessoaItem.cpf;
    tr.appendChild(tdCpf)

    var tdEmail = document.createElement('td');
    tdEmail.innerHTML = pessoaItem.email;
    tr.appendChild(tdEmail)

    var tdSenha = document.createElement('td');
    tdSenha.innerHTML = pessoaItem.senha;
    tr.appendChild(tdSenha)
    tbody.appendChild(tr)
});

