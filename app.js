//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação.
// Aqui você deverá desenvolver a lógica para resolver o problema.

// Declarações ----------
let AmigosSecretros = [];

// funções --------------

function adicionarAmigo() {
  let input = document.getElementById("amigo");
  let nomes = input.value.trim("");

  if (nomes === "") {
    alert("preencha o campo com o nome do seus amigos");
    return;
  }
  AmigosSecretros.push(nomes);
  AtualizaListaAmigos();
}

function AtualizaListaAmigos() {
  let list = document.getElementById("listaAmigos");
  list.innerHTML = "";

  for (let i = 0; i < AmigosSecretros.length; i++) {
    let li = document.createElement("li");
    li.textContent = AmigosSecretros[i];
    list.appendChild(li);
  }
}

function sortearAmigo() {
    if(AmigosSecretros.length === 0){
        alert("Sua lista de amigos esta vazia! Adicione algum amigo")
        return
    }
    let sorteio= Math.floor(Math.random() * AmigosSecretros.length);
    let amigoSorteado = AmigosSecretros[sorteio];

    document.getElementById("resultado").innerHTML = `Seu amigo é <strong> ${amigoSorteado}<strong>`
}
