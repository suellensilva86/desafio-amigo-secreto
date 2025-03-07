//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um novo amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (!nomeAmigo) {
        exibirModal('Por favor, insira um nome.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        exibirModal('Este nome já foi inserido na lista');
        return;
    }

    // Adiciona o nome à array
    amigos.push(nomeAmigo);

    // Atualiza a lista visual
    atualizarListaAmigos();

    // Limpa o campo de input
    inputAmigo.value = '';

    // Limpa o resultado anterior
    limparResultado();
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
    limparResultado();
}

// Função para exibir modal com mensagem
function exibirModal(mensagem) {
    // Cria o elemento do modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <p>${mensagem}</p>
            <button onclick="fecharModal()">OK</button>
        </div>
    `;

    // Adiciona o modal ao body
    document.body.appendChild(modal);

    // Exibe o modal
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

// Função para fechar o modal
function fecharModal() {
    const modal = document.querySelector('.modal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    if (amigos.length < 2) {
        exibirModal('É necessário ter pelo menos 2 amigos na lista para realizar o sorteio.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o elemento resultado
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `<p>O amigo sorteado foi: <strong>${amigoSorteado}</strong></p>`;

    // Opcional: adicionar uma classe para estilização
    resultadoElement.classList.add('resultado-sorteio');

    // Scroll suave até o resultado
    resultadoElement.scrollIntoView({ behavior: 'smooth' });
}

// Função para limpar o resultado
function limparResultado() {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    resultadoElement.classList.remove('resultado-sorteio');
}

// Adiciona o evento de click ao botão de adicionar
document.querySelector('.button-add').addEventListener('click', adicionarAmigo);

// Adiciona o evento de click ao botão de sortear
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);

// Adiciona o evento de tecla 'Enter' ao input
document.getElementById('amigo').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        adicionarAmigo();
    }
});

// Adiciona CSS para o modal e o resultado
const style = document.createElement('style');
style.textContent = `
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 1000;
    }
    .modal-content {
        background-color: white;
        padding: 20px;
        border-radius: 5px;
        text-align: center;
    }
    .modal-content button {
        margin-top: 10px;
        padding: 5px 10px;
        cursor: pointer;
    }
    .resultado-sorteio {
        margin-top: 20px;
        padding: 10px;
        background-color: #f0f0f0;
        border-radius: 5px;
        text-align: center;
        font-size: 1.2em;
    }
`;
document.head.appendChild(style);