//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
function adicionarAmigo() {
    // ... (existing code remains the same)
}

function sortearAmigo() {
    const listaAmigos = document.getElementById('listaAmigos');
    const amigos = Array.from(listaAmigos.children);
    
    if (amigos.length < 2) {
        alert('É necessário ter pelo menos 2 amigos na lista para realizar o sorteio.');
        return;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    const sorteio = amigos.map(li => li.textContent.replace('❌', '').trim());
    embaralhar(sorteio);

    for (let i = 0; i < sorteio.length; i++) {
        const li = document.createElement('li');
        li.textContent = `${sorteio[i]} -> ${sorteio[(i + 1) % sorteio.length]}`;
        resultado.appendChild(li);
    }
}

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}