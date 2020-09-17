
window.onload = function() { // ejecuta esta función cuando se carga el documento
    let heading = document.createElement('h1');
    let heading_text = document.createTextNode('Manipulando el DOM');
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
}