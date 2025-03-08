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
        item => item.textContent.toLowerCase() === amigo.toLowerCase()
    );

    if (nomeExistente) {
        alert('Este nome já foi adicionado à lista');
        return;
    }

    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);

    document.getElementById('amigo').value = '';
}