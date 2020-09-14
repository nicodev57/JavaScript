
// ------ IIFE immediately invoked function expression
(function() {
    let color = 'green'; 

    function printColor() {
        console.log(color);
    }

    printColor();
})(); // con esto sacamos este código del entorno global
// al intentar llamar color en consola como global sale ReferenceError


//  ------------------ funciones que regresan funciones ------------------------

function makeColorPrinter(color) {
    let colorMessage = `the color is ${color}`
    return function() {
        console.log(colorMessage)
    }
}

let greenColorPrinter = makeColorPrinter('green');

console.log(greenColorPrinter());

// un closure nos permite guardar el estado de otras variables independientemente si estan fuera o dentro del bloque


// ---------------------- Variables privadas -----------------------

// el closure nos permite una funcionalidad que no tiene el lenguaje y son las variables privadas

function makeCounter(n) {
    let count = n;  // esta es una variable privada

    return {
        increase: function() {
            count = count + 1;
        },
        decrease: function() {
            count = count - 1;
        },
        getCount: function() {
            return count; 
        }
    }
}

let counter = makeCounter(7);

console.log("the counter is:", counter.getCount());
counter.increase();
console.log("the counter is:", counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
counter.decrease();
console.log("the counter is:", counter.getCount());

count = 'nicolas';
console.log(count); // la primera variable count definida en el primer bloque (makeCounter) no se modifica porque es privada.

