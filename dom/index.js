
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
var nuevoSub = document.createElement("h2"); 

// 2. Crear un nodo de texto
var textTitle = document.createTextNode("Este es un subtitulo");

// 3. Añadir el nodo de texto al elemento
nuevoSub.appendChild(textTitle);

// 4. Agregar atributos al elemento
nuevoSub.setAttribute("align", "center"); // opcional -> es para agregar atributos, recibe 2 valores el atributo y el valor.

// 5. Agregar el elemento al documento 
document.getElementById("subtitulo").appendChild(nuevoSub);



