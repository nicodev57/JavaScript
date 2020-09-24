// ------- spread syntax en objetos

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


// -- .assign -> Copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino.

const target = {a: 1, b: 2};
const source = {c: 4, d: 5}; 

Object.assign(target, source); 

console.log(target);
// output -> { a: 1, b: 2, c: 4, d: 5 }




// ------- spread syntax en arreglos

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
// output -> ["head", "shoulders", "knees", "and", "toes"]

// -- .push -> agregar un elemento al final de un array

//lyrics.push('tongue');
console.log(lyrics);
// output -> [ 'head', 'shoulders', 'knees', 'and', 'toes', 'tongue' ]


// .shift -> elimina el primer elemento de un array y lo retorna. 

lyrics.shift();
console.log(lyrics)
// output -> [ 'shoulders', 'knees', 'and', 'toes' ] -> elimina el primer elemento "head"


// --- .concat 

var arr1 = ['1', '2', '3'],
    arr2 = ['4', '5', '6'];

var concatArray = arr1.concat(arr2);
console.log(concatArray);
// output --> [ '1', '2', '3', '4', '5', '6' ]

// ***Lo mismo con spread syntax

var arr1 = ['1', '2', '3'],
    arr2 = ['4', '5', '6'];

concatArray = [...arr1, ...arr2]; 
console.log(concatArray);
// output -> [ '1', '2', '3', '4', '5', '6' ]

// -- .unshift -> se usa para insertar un arreglo de valores al inicio de un arreglo existente

var arr1 = [0, 1, 2],
    arr2 = [3, 4, 5];

var newArreglo = [...arr2, ...arr1];

console.log(newArreglo);
// output -> [ 3, 4, 5, 0, 1, 2 ]



// --- spread literals tipo objeto
var obj1 = {
    foo: 'bar',
    x: 13
};

var obj2 = {
    foo: 'baz',
    y: 42
};

var cloneObj = {...obj1}; 
console.log(cloneObj);
// output cloneObj = { foo: "bar", x: 13 }

var mergeObj = {...obj1, ...obj2};
console.log(mergeObj);
// output mergeObj = { foo: "baz", x: 13, y: 42 }