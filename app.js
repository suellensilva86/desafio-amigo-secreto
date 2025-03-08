//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    if (amigo === '') {
        alert('Por favor, insira um nome');
        return;
    }

    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);

    document.getElementById('amigo').value = '';
}