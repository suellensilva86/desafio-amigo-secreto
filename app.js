
let amigos = [];

function adicionarAmigo() {
    let input_value = document.querySelector("input").value.trim();
    const regexp = /^[a-zA-Z\s]{3,30}$/;

    if (!regexp.test(input_value)) {
        alert("Por favor, insira um nome.");

    } else {
        amigos.push(input_value);
        input_value = "";
    }
}