//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.
const inputAmigo = document.getElementById('amigo');
const buttonAdd = document.getElementById('.button-add');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const buttonDraw = document.getElementById('.button-draw');

let amigosTotal = [];

function adicionarAmigo()
{
  const nomeAmigo = inputAmigo.value.trim();
  if(nomeAmigo == '')
  {
    alert('Por favor, digite um nome válido!');
  }
  amigosTotal.push(nomeAmigo);
  inputAmigo.value = '';
}