// los bucles nos permiten ejecutar tareas repetitivamente

// ------- for 
// sintaxis
/*
for (inicializador; condición de salida; expresión final) {
  // código a ejecutar
}
*/

// -- ejem1
/*
var cats = ['manolo', 'mateo', 'pinino', 'minino', 'hidraulico'];

var info = 'my cats are called: ';
var para = document.getElementsByTagName('p');

for(var i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

para.textContent = info;
*/

// -- eje2
/*
var contacts = ['nico: 3113452321', 'camilo: 3234555432', 'orlando: 3145673214'];
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
  var searchName = input.value; 
  input.value = ''; 
  input.focus();
  for(var i= 0; i < contacts.length; i++) {
    var splitContact = contacts[i].split(':');
    if(splitContact[0] === searchName) {
      para.textContent = splitContact[0] + '\'s number is' + splitContact[1] + '.';
      break;
    } else {
      para.textContent = 'Contact not found.';
    }
  }
});
*/

// ---- continue
/*
var para = document.querySelector('p');
var num = input.value; 
var input = document.querySelector('input');

for (var i = 1; i <= num; i++) {
  var sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  } 

  para.textContent += i + ' ';
} */

// ---------- Do & while 

// sintaxis 

/* 
initializer
while (exit-condition) {
  // code to run

  final-expression
}
*/

//while
/*
var i = 0; // en while el contador se inicializa antes del bucle

white(i < cats.length) {
  if(i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', '; 
  }
}
*/
// do while
// sintaxis 
/*
initializer
do {
  // code to run

  final-expression
} while (exit-condition)
*/
/*
var i = 0; // el contador se inicializa antes del bucle

do {
  if(i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
} while (i < cats.length); 
*/

/* ejer 1 */

var invitados = ['catalina', 'camilo', 'nicolas', 'florencia', 'martina'];

var admitted = document.querySelector('.admitted'); 
var refused = document.querySelector('.refused');

admitted.textContent = 'Admit: '; 
refused.textContent = 'Refuse: ';
var i = 0; 

do {
  if(invitados[i] === 'florencia' || invitados[i] === 'martina') {
    refused.textContent += invitados[i] + ', ';
  } else {
    admitted.textContent = invitados[i] + ', ';
  }
  i++;
} while(i < invitados.length);

refused.textContent =
refuse.textContent.slice(0, refused.textContent.length-2) + '.';
admitted.textContent =
admitted.textContent.slice(0, admitted.textContent.length-2) + '.';
