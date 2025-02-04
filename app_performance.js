let participantes = []
const amigoEl = document.querySelector('#amigo')
const listaAmigosEl = document.querySelector('#listaAmigos')

function adicionarAmigo(){
    const nomeAmigo = amigoEl.value.trim();
    if(nomeAmigo === ''){
        alert('Por favor insira um nome antes de adicionar.');
        return;    
    }

    if (!participantes.includes(nomeAmigo)){ //garante a não diplicidade de amigo:
        participantes.push(nomeAmigo);//add os participantes
        atualizarLista()
        amigoEl.value = '';//limpa o campo
    }
}

//função para atualizar a lista de participantes na interface
function atualizarLista(){
    listaAmigosEl.innerHTML = '';//limpar a lista antes de atualizá-la

    //percorre a array "participantes" e add cada nome á lista
    participantes.forEach (function(participantes){
        let item = document.createElement('li');//cria um novo elemento
        item.textContent = participantes;
        listaAmigosEl.appendChild(item);//add o item criado à lista no html
    });
}