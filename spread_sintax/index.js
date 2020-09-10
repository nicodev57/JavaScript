// ---------> spread literal en funciones

function myFunction (x, y, z) { 
    var args = [0, 1, 2];
    myFunction.apply(...args);
}

// ---------> cualquier argumento puede usar una sintaxis expandida y varias veces

function myFunction(v, w, x, y, z) {
    function myFunction(v, w, x, y, z) { }
    var args = [0, 1];
    myFunction(-1, ...args, 2, ...[3]);
 };


// --------->  spread literal en arrays

var parts = ['shoulders', 'kness'];
var lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]


// ---------> Copiar un objeto

var arr = ['0', '1', '2', '3'];
var arr2 = [...arr]; // igual a arr.slice()
arr2.push(4);
console.log(arr2);
//.push agrega uno o mas elemento al final del array y devuelve el nuevo array con su nueva longitud.

var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Now array a is affected as well: [[], [2], [3]]
//.shift() → elimina el primer elemento del array y lo retorna.

var arr = ['1', '2', '3'];
var arr2 = ['4', '5', '6'];
arr = arr.concat(arr2);
console.log(arr);
// me une el array 2 al array 1
// output -> [ '1', '2', '3', '4', '5', '6' ]

// concatenando con spread sintax: 
var arr = ['1', '2', '3'];
var arr2 = ['4', '5', '6'];
arr = [...arr, ...arr2]; 
console.log(arr);

// concatenando un arreglo al principio de otro.
// lo haciamos antes con Array.prototype.unshift.apply(arr2, arr1); 
// pero ahora con spread syntax:
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr2, ...arr1]; // arr1 is now [3, 4, 5, 0, 1, 2]


// -------> spread literal en objetos 

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
// output cloneObj = { foo: "bar", x: 42 }

var mergeObj = {...obj1, ...obj2};
console.log(mergeObj);
// output mergeObj = { foo: "baz", x: 13, y: 42 }



