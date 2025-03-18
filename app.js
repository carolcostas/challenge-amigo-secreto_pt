let amigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if (amigo === "") {
        return alert("Por favor, insira um nome");
    } else {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";
        atualizarLista();
    }
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (const amigo of amigos) {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    }
}

const botaoAdicionar = document.getElementsByClassName("button-add")[0];
botaoAdicionar.addEventListener("click", adicionarAmigo);

function sortearAmigo() {
    if (!amigos.length) {
        return alert("Não há amigos para o sorteio");
    }

    const numeroSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[numeroSorteado];

    const resultado = document.getElementById("resultado");
    const li = document.createElement("li");
    li.textContent = amigoSorteado;
    resultado.appendChild(li);

    amigos = [];
    atualizarLista();
}

const botaoSortear = document.getElementsByClassName("button-draw")[0];
botaoSortear.addEventListener("click", sortearAmigo);
