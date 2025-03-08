//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    // ... (código existente, sem alterações)
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

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Seleciona o amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado
    const li = document.createElement('li');
    li.textContent = `Amigo sorteado: ${amigoSorteado}`;
    resultado.appendChild(li);
}

// Adiciona event listener para o botão de sorteio
document.addEventListener('DOMContentLoaded', function() {
    const botaoSortear = document.querySelector('.button-draw');
    botaoSortear.addEventListener('click', sortearAmigo);
});
