//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    // ... (código anterior permanece o mesmo)
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

    // Oculta o botão de sorteio
    document.querySelector('.button-draw').style.display = 'none';

    // Exibe o botão de novo sorteio
    const botaoNovoSorteio = document.createElement('button');
    botaoNovoSorteio.textContent = 'Novo Sorteio';
    botaoNovoSorteio.classList.add('button-new-draw');
    botaoNovoSorteio.onclick = novoSorteio;
    document.querySelector('.button-container').appendChild(botaoNovoSorteio);
}

function novoSorteio() {
    // Limpa o resultado
    document.getElementById('resultado').innerHTML = '';

    // Remove o botão de novo sorteio
    const botaoNovoSorteio = document.querySelector('.button-new-draw');
    if (botaoNovoSorteio) {
        botaoNovoSorteio.remove();
    }

    // Exibe novamente o botão de sorteio
    document.querySelector('.button-draw').style.display = 'block';
}