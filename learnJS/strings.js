/* ---- Definir un string ---- */

var StringCoDobles = "Nicolas";
var StringCoSimples = 'Daniela';
var StringTemplateLiterals = `Camilo`;
// con template literals podemos interpolar texto y variables

/* ---- .Length ---- */

function nameLength(name) {
  return name.length;
}

console.log(nameLength('Nicolas'));



/* ---- to Upper Case ---- */

function nameUpperCase(name) {
  return name.toUpperCase();
}

console.log(nameUpperCase('Nicolas'));



/* ---- to Lower Case ---- */

function nameUpperCase(name) {
  return name.toLowerCase();
}

console.log(nameUpperCase('DANIELA'));



/* ---- SubStrings ---- */

var language = 'JavaScript'

console.log(language.substring(1, 5));
// return avaS



/* ------------ Miscellaneous String Methods  ---- */

// ---- .startsWith

const phoneNumber = '+573112567893';
console.log(phoneNumber.startsWith('+')); // true
console.log(phoneNumber.startsWith('10')) // false


// ---- .endsWith

const phoneNumber = '+573112567893';

console.log(phoneNumber.endsWith('3')); // true
console.log(phoneNumber.endsWith('7')); // false


// ---- .trim

var orig = '    foo   ';
console.log(orig.trim()); // elimina los espacios

