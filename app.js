//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um novo amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo) {
        // Adiciona o nome à array
        amigos.push(nomeAmigo);

        // Atualiza a lista visual
        atualizarListaAmigos();

        // Limpa o campo de input
        inputAmigo.value = '';
    }
}

// Função para atualizar a lista visual de amigos
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        
        // Adiciona um botão para remover o amigo
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.onclick = () => removerAmigo(index);
        
        li.appendChild(botaoRemover);
        listaAmigos.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
}

// Função para sortear amigos (placeholder)
function sortearAmigo() {
    // Lógica de sorteio a ser implementada
    console.log('Sorteio iniciado');
}

// Adiciona o evento de click ao botão de adicionar
document.querySelector('.button-add').addEventListener('click', adicionarAmigo);

// Adiciona o evento de tecla 'Enter' ao input
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});