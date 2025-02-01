let amigos = [];

function adicionarAmigo() {
    input = document.getElementById('amigo').value;
    if (input == '') {
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(input);
        atualizarListaAmigos()
        cleanCampo();
    }
}

function cleanCampo() {
    document.getElementById('amigo').value = '';
}

function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.innerHTML = amigo;
        lista.appendChild(item);
    });
    
}

function sortearAmigo() {
    if (amigos.length > 0) {   
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById('resultado').innerHTML = sorteado;
    }
}


