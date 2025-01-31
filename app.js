// Array para armazenar os nomes
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    listaAmigos.push(nome);
    atualizarLista();
    inputNome.value = ""; // Limpar campo de entrada
}

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
    let ulLista = document.getElementById("listaAmigos");
    ulLista.innerHTML = "";

    listaAmigos.forEach((nome) => {
        let li = document.createElement("li");
        li.textContent = nome;
        ulLista.appendChild(li);
    });
}

// Função para sortear um amigo aleatoriamente e limpar a lista
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("Adicione ao menos um nome antes de sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;

    // Resetar a lista após o sorteio
    listaAmigos = [];
    atualizarLista(); // Atualiza a interface para limpar a lista
}
