let participantes = [];
let sorteados = [];
const amigoEl = document.querySelector('#amigo');
const listaAmigosEl = document.querySelector('#listaAmigos');

 //add um ouvinte de evento para detectar quando a tecla Enter é pressionada
 amigoEl.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        adicionarAmigo();//chama a função para add o amigo
    }
});


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
        
        //aplicaçao animação de entrada
        item.animate(
            [
                {opacity: 0, transform:'translateY(-10PX)'},
                {opacity:1, transform:' translateY(0)'}
            ],
            {
                duration:500,
                easing: 'ease-out'
            }

        );
    });
    
}

function sortearAmigo(){
    //verifica se há participantes suficientes
    if(participantes.length < 2){;
        alert('Adicione pelo menos dois participantes para sortear!');
        return;
    }

    if(sorteados.length === participantes.length){
        alert('todos os amigos secretos já foram sorteados!');
        return;
    }
    //Embaralhar os participantes
    participantes.sort(() => Math.random() - 0.5);

    //sortear amigo
    let sorteado;
    do{
        sorteado = participantes[Math.floor(Math.random()*participantes.length)];
    }while(sorteados.includes(sorteado));//não seja sorteado novamente

    //add à lista de sorteados
    sorteados.push(sorteado);

    //exibir o sorteado
    exibirResultado(sorteado);     
}

function exibirResultado(sorteado){
    const resultadoEl = document.querySelector('#resultado');
    resultadoEl.innerHTML = ''; //limpa a lista de resultados antes de add

    //exibir o nome do amigo sorteado
    const item = document.createElement('li');
    item.textContent = `O seu Amigo Secreto é: ${sorteado}`;
    resultadoEl.appendChild(item);

    item.animate(
        [
            {transform:'scale(1)', opacity:1},
            {transform: 'scale(1.1)', opacity: 0.8},
            {transform:'scale(1)', opacity:1}
        ],
        {
            duration: 1000,
            easing: 'ease-in-out'
        }

    );

}

function novoSorteio(){
    //limpa os participantes
    listaAmigosEl.innerHTML = '';
    //limpar a lista de resultados anteriores 
    const resultadoEl = document.querySelector('#resultado');
    resultadoEl.innerHTML = '';
    //limpa o array e reinicia a lista de sorteados e participantes
    sorteados = [];
    participantes = [];
    
    alert('Novo Sorteio iniciado! Adicione participantes e sorteie novamente');
}