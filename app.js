//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    if (amigo === '') {
        alert('Por favor, insira um nome');
        return;
    }

    // Verifica se o nome já existe na lista
    const nomeExistente = Array.from(listaAmigos.children).some(
        item => item.textContent.replace('❌', '').trim().toLowerCase() === amigo.toLowerCase()
    );

    if (nomeExistente) {
        alert('Este nome já foi adicionado à lista');
        return;
    }

    const li = document.createElement('li');
    li.textContent = amigo + ' ';

    // Adiciona o emoji de "x" como botão de exclusão
    const botaoExcluir = document.createTextNode('❌');
    li.appendChild(botaoExcluir);

    // Adiciona o evento de clique para exclusão
    li.addEventListener('click', function(e) {
        if (e.target === li && e.offsetX > li.offsetWidth - 20) {
            li.remove();
        }
    });

    listaAmigos.appendChild(li);

    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.children);
    
    if (amigos.length < 2) {
        alert('É necessário adicionar pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio].textContent.replace('❌', '').trim();

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}