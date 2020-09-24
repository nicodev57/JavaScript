const gato = {
    nombre: "chanchito", 
    edad: 3,
}

console.log(gato);

const gato2 = { ...gato }
// con los 3 puntos le decimos a JS que haga una copia del objeto definido. (en este caso gato)
// es decir, asignale a la constante gato2 una copia del objeto gato.
// pero ahora son 2 objetos independientes.
gato2.nombre = 'lalala'
console.log(gato2);
// ahora el nombre de gato2 es lalala
const gatos = [gato, gato2]
