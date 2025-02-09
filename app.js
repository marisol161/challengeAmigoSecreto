let amigosParaSortear = []; //Este array guarda los amigos que  son añadidos desde el input
let amigosSorteados = []; // Este otro array es para almacenar los amigos ya sorteados y así poder validar si ya salio en el sorteo


function agregarAmigo() {
    // Obtengo  el valor del input
    let amigoInsertado = document.getElementById('amigo').value.trim().toLowerCase();

    // Validación de entrada vacía
    if (amigoInsertado === '') {
        Swal.fire("Por favor, ingresa un nombre.");
        limpiarTxt();
        return;
    }

    // Validación de nombres duplicados
    if (amigosParaSortear.includes(amigoInsertado)) {
        Swal.fire("Ese nombre ya se encuentra registrado, por favor, ingresa un nombre distinto.");
        limpiarTxt();
        return;
    }

    // Agrego el nombre al array y actualizo la lista
    amigosParaSortear.push(amigoInsertado);
    actualizarListaAmigos();

    limpiarTxt();
    console.log(amigosParaSortear);
}


function actualizarListaAmigos() {
    let lista = document.querySelector('.name-list');
    lista.innerHTML = amigosParaSortear.length ? amigosParaSortear.map(amigo => `<li>${amigo}</li>`).join('') : '';

}


function sortearAmigo() { 

    
    if (amigosParaSortear.length === 0) { //Si aún no se ingresan amigos
        Swal.fire("Necesitas ingresar amigos a la lista");
        
    } else if (amigosSorteados.length === amigosParaSortear.length) { // Si ya se sorteron todos los amigos
        Swal.fire("Ya se han sorteado todos los amigos.");
        return;
    }

    let amigoSorteado = null;

    for (let i = 0; i < amigosParaSortear.length; i++) {
        let indiceSorteado = Math.floor(Math.random() * amigosParaSortear.length);
        let posibleAmigo = amigosParaSortear[indiceSorteado];

                // Verificar si el amigo ya fue sorteado
        if (!amigosSorteados.includes(posibleAmigo)) {
            amigoSorteado = posibleAmigo;
            amigosSorteados.push(amigoSorteado);
            break; // Salimos del bucle cuando encontramos un amigo no sorteado
        }
        
    }

    if (amigoSorteado) {
        Swal.fire({
            title: "¡Amigo secreto!🎉",
            text: `El amigo seleccionado es: ${amigoSorteado}  `
        });
        console.log(`Amigo secreto: ${amigoSorteado}`);
    }
}


function limpiarTxt() { //Limpiamos el input donde ingresamos el nombre del amigo
    document.querySelector('#amigo').value = '';
}
