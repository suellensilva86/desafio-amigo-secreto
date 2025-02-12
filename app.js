let amigos = [];

function adicionarAmigo() {
    let input_value = document.querySelector("input").value.trim();
    const regexp = /^[a-zA-ZÀ-ÿ\s]{3,30}$/;

    if (!regexp.test(input_value)) {
        alert("Por favor, insira um nome.");

    } else {
        amigos.push(input_value);
        input_value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (index = 0; index <= amigos.length; index++) {
        let item = document.createElement("li");
        item.textContent = amigos[index];
        lista.appendChild(item);
    }
}

function mostrarResultado(rng) {
    let lista_resultado = document.getElementById("resultado");
    lista_resultado.innerHTML = "";

    let item = document.createElement("li");
    item.textContent = amigos[rng];

    lista_resultado.appendChild(item);
}

function sortearAmigo() {
    const rng = Math.floor(Math.random() * amigos.length);

    return amigos.length == 0 ? alert("Por favor, insira um nome.") : mostrarResultado(rng);    
}
