// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;

    if (nombreDeAmigo === '') {
        alert ("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreDeAmigo);
                console.log(amigos);
    }
    mostrarAmigosEnPantalla();
    limpiarCampoDeEntrada();
}

function mostrarAmigosEnPantalla() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = '';
    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigos[i];
        listaDeAmigos.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    } else {
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let ganador = document.getElementById('resultado');
        ganador.innerHTML = `El amigo sorteado es ${amigoSorteado}`;
        limpiarLista()
    }
}

function limpiarCampoDeEntrada() {
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}

function limpiarLista() {
    document.getElementById('listaAmigos').innerHTML = '';
}

