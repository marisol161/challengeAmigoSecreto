# Amigo Secreto 🎁🫣

Este es un proyecto web interactivo que permite realizar un sorteo de amigo secreto. Los usuarios pueden agregar nombres a una lista y luego sortearlos aleatoriamente para asignar un amigo secreto.

## Tecnologías utilizadas 🛠️
- **HTML**: Estructura del documento web.
- **CSS**: Estilos y diseño de la interfaz.
- **JavaScript**: Lógica del sorteo y manipulación del DOM.
- **SweetAlert2**: Librería para mostrar alertas más atractivas.

## Características 📌
✅ Agregar nombres a una lista de participantes.<br/>
✅ Validar que no se repitan nombres.<br/>
✅ Realizar el sorteo de manera aleatoria.<br/>
✅ Evitar que un participante se repita en el sorteo.<br/>
✅ Mostrar los resultados con un mensaje emergente.<br/>

## Funcionalidades y conceptos clave 💡

### 1️⃣ Funciones
Las funciones en JavaScript permiten reutilizar bloques de código. En este proyecto, se usaron varias funciones como:
- `agregarAmigo()`: Agrega un nuevo amigo a la lista.
- `sortearAmigo()`: Realiza el sorteo asegurando que no se repitan amigos.
- `actualizarListaAmigos()`: Actualiza la lista de participantes en el HTML.
- `limpiarTxt()`: Limpia el campo de entrada después de añadir un nombre.

### 2️⃣ Eventos y `onclick`
El atributo `onclick` se utiliza para ejecutar funciones cuando se hace clic en un botón:
```html
<button class="button-add" onclick="agregarAmigo()">Añadir</button>
<button class="button-draw" onclick="sortearAmigo()">Sortear amigo</button>
```

### 3️⃣ `Math.random()` y `Math.floor()`
Se usa `Math.random()` para generar números aleatorios y `Math.floor()` para redondearlos.
```js
let indiceSorteado = Math.floor(Math.random() * amigosParaSortear.length);
```
Esto garantiza que el índice sorteado esté dentro del rango de la lista.

### 4️⃣ Arrays
Los arreglos (`arrays`) se utilizan para almacenar los nombres ingresados y los amigos ya sorteados.
```js
let amigosParaSortear = [];
let amigosSorteados = [];
```

### 5️⃣ Métodos de Arrays
- `.includes()`: Verifica si un elemento ya está en el array.
- `.push()`: Agrega un nuevo elemento al array.
- `.map()`: Recorre el array y devuelve un nuevo arreglo con los valores transformados:
```js
lista.innerHTML = amigosParaSortear.map(amigo => `<li>${amigo}</li>`).join('');
```

### 6️⃣ Bucles
Se usa un `for` para iterar sobre los amigos y evitar que se repitan en el sorteo:
```js
for (let i = 0; i < amigosParaSortear.length; i++) {
    let indiceSorteado = Math.floor(Math.random() * amigosParaSortear.length);
    let posibleAmigo = amigosParaSortear[indiceSorteado];
    if (!amigosSorteados.includes(posibleAmigo)) {
        amigoSorteado = posibleAmigo;
        amigosSorteados.push(amigoSorteado);
        break;
    }
}
```

### 7️⃣ Condicionales (`if`)
Se utilizan para validar la entrada de datos y controlar la lógica del sorteo:
```js
if (amigosParaSortear.length === 0) {
    Swal.fire("Necesitas ingresar amigos a la lista");
} else if (amigosSorteados.length === amigosParaSortear.length) {
    Swal.fire("Ya se han sorteado todos los amigos.");
    return;
}
```
## Documentación 📚
* [MDN JS](https://developer.mozilla.org/es/docs/Web/JavaScript)
* [SweetAlert2](https://sweetalert2.github.io/)


