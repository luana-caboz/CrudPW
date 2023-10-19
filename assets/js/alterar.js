function getParameter(theParameter) {
    var params = window.location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }

    return false;
}
var id = getParameter('id')

let arr = JSON.parse(localStorage.getItem('pessoa'));
const response = arr.filter(i => i.id == id);

document.querySelector('#inputNome').value = response[0].nome;
document.querySelector('#inputDataNascimento').value = response[0].DataNascimento;
document.querySelector('#inputEmail1').value = response[0].email;
document.querySelector('#inputCPF1').value = response[0].cpf;
document.querySelector('#inputPassword1').value = response[0].senha;

// localStorage.setItem('pessoa', JSON.stringify(response))

let arr1 = JSON.parse(localStorage.getItem('pessoa'));
const response1 = arr.filter(i => i.id != id);
localStorage.setItem('pessoa', JSON.stringify(response1));

document.querySelector('#btnEnviar').addEventListener('click', () => {
    let nome = document.querySelector('#inputNome').value;
    let DataNascimento = document.querySelector('#inputDataNascimento').value;
    let email = document.querySelector('#inputEmail1').value;
    let cpf = document.querySelector('#inputCPF1').value;
    let senha = document.querySelector('#inputPassword1').value;

    if(nome == ""){
       alert("Preencha o nome") 
       return;
    } else if(DataNascimento == ""){
        alert("Preencha a data de nascimento") 
        return;
    }
    else if(email == ""){
        alert("Preencha o Email") 
        return;
    }
    else if(cpf == ""){
        alert("Preencha o cpf") 
        return;
    }
    else if(cpf.match("[^0-9]")){
        alert("Somente numeros")
        return;
    }
    else if(senha == ""){
        alert("Preencha a senha") 
        return;
    }

    let arr = JSON.parse(localStorage.getItem('pessoa')) || [];

    const usuario = {
        id: Math.floor(Math.random() * 100),
        nome: nome,
        DataNascimento: DataNascimento,
        email: email,
        cpf: cpf,
        senha: senha,
    }

    arr.push(usuario)
    //salvando no localStorage(memoria) como uma string
    localStorage.setItem('pessoa', JSON.stringify(arr));
})

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
})