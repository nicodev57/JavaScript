
// window.onload = function() { // ejecuta esta función cuando se carga el documento
//     let heading = document.createElement('h1');
//     let heading_text = document.createTextNode('Manipulando el DOM');
//     heading.appendChild(heading_text);
//     document.body.appendChild(heading);
// }


// var elementosP = document.getElementsByTagName('p');
// var segundoP = document.getElementById('segundo');


// --- Pasos para crear un nodo 

// 1. crear el elemento
// var nuevoSub = document.createElement("h2"); 

// 2. Crear un nodo de texto
// var textTitle = document.createTextNode("Este es un subtitulo");

// 3. Añadir el nodo de texto al elemento
// nuevoSub.appendChild(textTitle);

// 4. Agregar atributos al elemento
// nuevoSub.setAttribute("align", "center"); // opcional -> es para agregar atributos, recibe 2 valores el atributo y el valor.

// 5. Agregar el elemento al documento 
// document.getElementById("subtitulo").appendChild(nuevoSub);


//-----------------------------------------------------------



// --------- Agregando nodos al Documento

//     let listItem = document.createElement('li'),
//     contentItem = document.createTextNode('Soy el nuevo list item');
//     padre = document.getElementById('OrdenedList'),
//     hijo = document.getElementsByTagName('li')[0];

//listItem.appendChild(contentItem); // agregamos el contenido al elemento

//padre.appendChild(listItem); // agregamos el nuevo elemento (li) al elemento con el nombre padre.
// aca se agrega el elemento al final de la lista
// --- con byTagName

//let padre = document.getElementsByTagName('li'); // cogemos todos los li
// me devuelve los elementos en un array

// -- accedemos a ellos igual que con un array

//let padre = document.getElementsByTagName('li')[0].parentNode;
// parent node nos devuelve cual es el elemento padre.
// parent node lo usamos cuando no sabemos cual es el elemento padre

// output = <old id="orderedList"> --> me devuelve el elemento padre.

// ------ Para agregar el elemento al inicio de la lista

//padre.insertBefore(listItem, hijo);
// recibe 2 parámetros
// 1. el elemento que queremos añadir
// 2. la referencia del elemento donde queremos agregar antes el nuevo elemento creado



//-----------------------------------------------------------


// --- Modificando, Remplazando y Eliminando Nodos del DOM

// -- Acceder a un elemento y al texto
//let primerElemento = document.getElementsByTagName('li')[0];
// 1. opción
//primerElemento.innerHTML = 'Soy el nuevo texto con innerHTML'
// con innerHTML podemos agregar etiquetas como string y las va a agregar al DOM
// innerHTML para el resto de elementos.

// 2. opción
//primerElemento.textContent = 'Soy el nuevo texto con textContent'
// con textContent no podemos ejecutar HTML, todo lo toma con texto.
// text content para formularios.


// -------- Remplazar nodos del dom

// let listItem = document.createElement('li'),
//     contentItem = document.createTextNode('Soy el nuevo list item'),
//     padre = document.getElementsByTagName('li')[0].parentNode,
//     ref = document.getElementsByTagName('li')[0];

// listItem.appendChild(contentItem);
// recibe 2 paremtros. 
// 1 el elemento que queremos agregar y 2 el que queremos eliminar.


// -------- Eliminar nodos del dom

//padre.removeChild(ref);


//-----------------------------------------------------------

// ---- Acceso a los atributos del DOM

let elemento = document.createElement('div'),
    classDiv = 'box',
    padre = document.getElementById('contenedor'),
    ref = document.getElementsByTagName('div')[0];

padre.insertBefore(elemento, ref)
elemento.setAttribute("class", "box");

//elemento.className = classDiv; // agregar clases a un elemento.

let elementoDos = document.getElementsByTagName('div')[1]; 

elementoDos.setAttribute("class", "rojo");


let elementoTres = document.getElementsByTagName('div')[2];

elementoTres.setAttribute("class", "azul");


// ---- Cambiando atributos accediendo al elemento directamente

// syntax = elemento.id = "nuevoID";

elementoTres.id = "idTres"

// clases
elementoTres.className = "azul claseTres" // agregar 2 clases al mismo elemento
// respeta los espacios para añadir las clases que queramos


let linkUno = document.getElementById('enlace');
console.log(linkUno.id) // podemos acceder al id de un elemento

//console.log(linkUno.href); // acceder a valores de atributos

linkUno.href = "www.instagram.com" // cambiar el valor de atributos

console.log(linkUno.href)




// ********--------------- continuar https://www.youtube.com/watch?v=m5-UD2hJPtM