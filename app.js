//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
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

    // Resto do código de sorteio existente...
    // (mantenha o código original aqui)

    // Exemplo de como pode ser o restante da função:
    const amigos = Array.from(listaAmigos.children).map(li => li.textContent.replace('❌', '').trim());
    // Lógica de sorteio...
    // Exibição dos resultados...
}

// Função adicionarAmigo() existente
function adicionarAmigo() {
    // ... (código existente)
}

// Adicione um event listener para o botão de sorteio, se ainda não existir
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
