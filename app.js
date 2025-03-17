//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []

function adicionarAmigo (){
    let amigo = document.querySelector("#amigo").value
    amigos.push(amigo)
    listarAmigos()
}
function listarAmigos(){
    let lista = document.querySelector("#listaAmigos")
    lista.textContent = ""
    for (var amigo of amigos){
        let item = document.createElement("li");
        item.innerHTML = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        return
    }

    let pos = Math.floor(Math.random() * amigos.length)
    document.querySelector('#resultado').innerText = amigos[pos]
    delete amigos[pos]
    amigos = amigos.filter(amigo => amigos)
    listarAmigos()
}

listarAmigos()