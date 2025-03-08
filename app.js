//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Função para adicionar um novo amigo à lista
function adicionarAmigo() {
    const amigo = document.getElementById('amigo').value.trim();
    const listaAmigos = document.getElementById('listaAmigos');

    // Verifica se o campo de entrada está vazio
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

    // Cria um novo item de lista para o amigo
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

    // Adiciona o novo amigo à lista
    listaAmigos.appendChild(li);

    // Limpa o campo de entrada
    document.getElementById('amigo').value = '';
}

// Função para sortear um amigo da lista
function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.children);
    
    // Verifica se há pelo menos 2 amigos na lista
    if (amigos.length < 2) {
        alert('É necessário adicionar pelo menos 2 amigos para realizar o sorteio.');
        return;
    }

    // Gera um índice aleatório e seleciona o amigo correspondente
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio].textContent.replace('❌', '').trim();

    // Exibe o resultado do sorteio
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;

    // Oculta o botão de sorteio e mostra o botão de novo sorteio
    document.querySelector('.button-draw:not(.button-new-draw)').style.display = 'none';
    document.querySelector('.button-new-draw').style.display = 'inline-block';
}

// Função para iniciar um novo sorteio
function novoSorteio() {
    // Limpa o resultado do sorteio anterior
    document.getElementById('resultado').innerHTML = '';

    // Oculta o botão de novo sorteio e mostra o botão de sorteio original
    document.querySelector('.button-new-draw').style.display = 'none';
    document.querySelector('.button-draw:not(.button-new-draw)').style.display = 'inline-block';
}