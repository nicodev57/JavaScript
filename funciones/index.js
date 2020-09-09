/*
// ----- replace() 


let cadenaTexto = 'soy una cadena de texto'
let remplazoCadena = cadenaTexto.replace('cadena', 'ensalada');
// replace nos permite remplazar una palabra de un string por otra. 
console.log(remplazoCadena);

// ----- join 

let arreglo =['yo', 'amo', 'el', 'chocolate'];
let unionArreglo = arreglo.join(' ');
// join toma un array, une todos sus elementos en una cadena de texto
// y devuelve esta nueva cadena. 
console.log(unionArreglo);

// ----- Math.random -> generar un número random

let numRandom = Math.random();
console.log(numRandom);
// Math.random genera un numero aleatorio entre 0 y 1

// ----- custom function

function random(numero) {
  return Math.floor(Math.random()*numero);
}

console.log(random(20));

// ----- funciones anónimas

var myButton = document.querySelector('button');
myButton.onclick = function() { // funcion anonima
  alert('hello');
}

var greeting = function() { // almacenar funcion anónima dentro de una variable
  console.log('hello');
}

greeting(); // se invoca igual que una función con sus respectivos paréntesis


// ----- Subfunciones (Funciones dentro de otras)

function myBigFunction() {
  var myValue = 1;
      
  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}
*/

/* ------------------ EJERCICIOS ----------------- */

function suma() {
  var num1 = document.getElementById("numero1").value;
  var num2 = document.getElementById("numero2").value;
  return parseInt(num1) + parseInt(num2);
} 

