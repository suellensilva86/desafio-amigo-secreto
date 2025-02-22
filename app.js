//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
const nomeInput = document.getElementById('nome'); // ou document.querySelector('#nome');
if (!nomeInput) {
    alert("Elemento de entrada não encontrado.");
    return;
}
const nome = nomeInput.value;
if (nome.trim() === '') {
    alert("Por favor, insira um nome.");
}
const lista = document.getElementById('id-da-sua-lista'); // ou document.querySelector(`#id-da-sua-lista`);
if (nome.trim() !== '') {
    amigos.push(nome);
    nomeInput.value = '';
    // document.getElementById('id-da-sua-lista') // ou document.querySelector(`#id-da-sua-lista`);
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
    li.textContent = amigos[i]; // Adiciona o nome do amigo
    lista.appendChild(li); // Adiciona o <li> à lista
}
    li.textContent = amigos[i]; // Adiciona o nome do amigo
    lista.appendChild(li); // Adiciona o <li> à lista
}
if (amigos.length === 0) { /* mensagem de erro */ }
const indiceAleatorio = Math.floor(Math.random() * amigos.length) // Gera um índice aleatório
const amigoSorteado = amigos[indiceAleatorio] // Obtém o amigo sorteado
alert(`O amigo sorteado é: ${amigoSorteado}`) // Exibe o amigo sorteado
document.getElementById('resultado').innerHTML = amigoSorteado // Exibe o amigo sorteado na página
