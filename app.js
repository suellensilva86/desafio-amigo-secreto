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
        if (e.target === this && e.offsetX > this.offsetWidth - 20) {
            this.remove();
        }
    });

    listaAmigos.appendChild(li);

    document.getElementById('amigo').value = '';
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const resultado = document.getElementById('resultado');

    // Verifica se a lista está vazia
    if (listaAmigos.children.length === 0) {
        alert('A lista de amigos está vazia. Adicione nomes antes de sortear.');
        return;
    }

    // Limpa resultados anteriores
    resultado.innerHTML = '';

    // Array para armazenar os nomes dos amigos
    const amigos = Array.from(listaAmigos.children).map(li => li.textContent.replace('❌', '').trim());

    // Embaralha o array
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }

    // Cria os pares de amigos secretos
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const amigoSecreto = amigos[(i + 1) % amigos.length];
        
        const li = document.createElement('li');
        li.textContent = `${amigo} -> ${amigoSecreto}`;
        resultado.appendChild(li);
    }
}

// Adiciona event listeners para os botões
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.button-add').addEventListener('click', adicionarAmigo);
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});