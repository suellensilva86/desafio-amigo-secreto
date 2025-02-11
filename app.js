
let amigos = [];

function adicionarAmigo() {
    let input_value = document.querySelector("input").value.trim();
    const regexp = /^[a-zA-Z\s]{3,30}$/;

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

function sortearAmigo() {
    const random_number = (Math.floor(Math.random() * (amigos.length + amigos.length))) ;
    
}