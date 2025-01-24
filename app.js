//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo() {
    input = document.querySelector('input').value;
    if (input == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(input);
        atualizarListaAmigos
        cleanCampo();
    }
}

function cleanCampo() {
    document.querySelector('input').value = '';
}

function atualizarListaAmigos() {
    let lista = document.querySelector('ul');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.innerHTML = amigo;
        lista.appendChild(item);
    });
    exibirTextoNaTela(amigos, 'listaAmigos');
}

function sortearAmigo() {
    if (amigos.length != 0) {   
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = sorteado;
    }
}


