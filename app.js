let participantes = []

function adicionarAmigo(){
    let amigo = document.getElementById('amigo').value.trim();
    if(amigo === ''){
        alert('Por favor insira um nome antes de adicionar.');
        return;    
    }

    if (!participantes.includes(amigo)){ //garante a não diplicidade de anigos:
        participantes.push(amigo);//add os participantes
        atualizarLista()
        document.querySelector('#amigo').value = '';//limpa o campo
    }
}

//função para atualizar a lista de participantes na interface
function atualizarLista(){
    let listaAmigos = document.querySelector('#listaAmigos');//obtém o elemento <ul>
    listaAmigos.innerHTML = '';

    participantes.forEach (function(participantes){
        let item = document.createElement('li');//cria um novo elemento
        item.textContent = participantes;
        listaAmigos.appendChild(item);
    });
}