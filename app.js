let amigosnombres = [];
function agregarAmigo() {
    const campoNombre = document.getElementById('amigo');
    const nombreAmigo = campoNombre.value;
    if (nombreAmigo === '' || nombreAmigo.trim() === '') {
        alert('Por favor, inserte un nombre.');
        return; 
    }
    amigosnombres.push(nombreAmigo.trim());
    campoNombre.value = '';
    console.log('Amigos agregados:', amigosnombres);
    mostrarAmigos();
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigosnombres.length; i++) {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigosnombres[i];
        lista.appendChild(nuevoElemento);
    }
}
function sortearAmigo() {
    if (amigosnombres.length === 0) {
        alert('No hay amigos disponibles para sortear, añade algunos nombres primero.');
        return; 
    }
    const indiceAleatorio = Math.floor(Math.random() * amigosnombres.length);
    const amigoSorteado = amigosnombres[indiceAleatorio];
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
    console.log('Amigo sorteado:', amigoSorteado);
    console.log('Índice usado:', indiceAleatorio);
}
