//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo(){
  let amigo = document.getElementById("amigo").value
  
  if(amigo === ""){
    return alert(`Por favor, insira um nome`) 
  } else {
    amigos.push(amigo)
     document.getElementById("amigo").value = '';
     atualizarLista()
  }
}


function atualizarLista(){
  const lista = document.getElementById("listaAmigos")
    lista.innerHTML = '';

  for (const amigo of amigos) {
    const li = document.createElement('li')
    li.textContent = amigo;
    lista.appendChild(li);
  }
}


const button = document.getElementsByClassName("button-add")[0]

button.addEventListener('click', adicionarAmigo)

