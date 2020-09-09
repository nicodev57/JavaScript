/*const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random()*number);
}

function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.onclick = bgChange;
*/

// ----- Agregar funcion onclick a todos los botones de una pagina

/*
function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

var buttons = document.querySelector('button');

for (var i= 0; i < buttons.length; i++) {
  buttons[i].onclick = bgChange;
}

*/

// -------- addEventListener() y removeEventListener()
/*
var btn = document.querySelector('button');

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

btn.addEventListener('click', bgChange);
*/

// ------ otros conceptos de eventos
/*
var btn = document.querySelector('button');

function bgChange(e) { // e equivale a evento.
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCol; 
  console.log(e);
}

btn.addEventListener('click', bgChange);
*/
/*
const DIVS = document.querySelectorAll('div');

function bgChange() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}

for(i = 0; i < DIVS.length; i++) {
  DIVS[i].onclick = function(e) {
    e.target.style.backgroundColor = bgChange();
  }
}
*/

// -------- Prevent Default 
/*
var form = document.querySelector('form'); 
var fname = document.getElementById('fname');
var lname = document.getElementById('lname');
var submit = document.getElementById('submit');
var pgraph = document.querySelector('p');

form.onsubmit = function(e) {
  if(fname.value === '' || lname.value === '') {
    e.preventDefault();
    pgraph.textContent = 'Necesitas rellenar ambos nombres!';
  }
}
*/

// --------- Event bubbling and capture  

const btn = document.querySelector('button');

btn.onclick = function() {
  videoBox.setAttribute('class', 'showing');
};

videoBox.onclick = function() {
  videoBox.setAttribute('class', 'hidden');
};

videoBox.onclick = function() {
  video.play();
}
