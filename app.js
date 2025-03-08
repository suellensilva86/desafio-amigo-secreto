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

// Adiciona um event listener para o botão de sorteio
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);