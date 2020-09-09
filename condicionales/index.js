/*------ if else ------ */

 let numero = 11;


function numeroMayor() {
  if(numero > 10) {
    console.log('el numero es mayor que 10')
  } else {
    console.log('el numero es menor que 10')
  }
}

numeroMayor();


function subsidio() {
  let compraRealizada = false;
    if (compraRealizada === true) {
      let subsidioAdicional = 10;
    } else {
    let subsidioAdicional = 5;
  }
} 


/*------ else if  ------ */

let seleccionar = document.querySelector('select');
let parrafo = document.querySelector('p');

seleccionar.addEventListener('change', establecerClima);

function establecerClima() {
  let eleccion = seleccionar.value;

  if(eleccion === soleado) {
    parrafo.textContent = "El día de hoy esta haciendo un sol muy agradable";
  } else if (eleccion === lluvioso) {
    parrafo.textContent = "El día de hoy esta muy lluvioso, no olvides llevar tu sombrilla";
  } else if (eleccion === nevando) {
    parrafo.textContent = "Esta nevando, lleva tu abrigo";
  } else if (eleccion === nublado) {
    parrafo.textContent = "El día esta muy nublado"
  } else {
    parrafo.textContent = ''; 
  }
}


/* ------ operadores lógicos */

if (eleccion === 'soleado' && temperatura < 86) {
  parrafo.textContent = 'Está a ' + temperatura + ' grados afuera — agradable y soleado. Vamos a la playa, o al parque, y comer helado.';
} else if (eleccion === 'soleado' && temperatura >= 86) {
  parrafo.textContent = 'Está a ' + temperatura + ' grados afuera — ¡QUÉ CALOR! Si deseas salir, asegúrate de aplicarte bloqueador solar.';
}



/* ----- condicional switch sintaxis ------ */

switch (expresion) {
  case choice1:
    ejecuta este código
    break;

  case choice2:
    ejecuta este código
    break;
    
  // Se pueden incluir todos los casos que quieras

  default:
    por si acaso, corre este código
}



var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);


function setWeather() {
  var choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}


// -------- operador ternario 

var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  (select.value === 'black') ? update('black', 'white') : update('white', 'black');
}


// ------ ejercicio 1

var select = document.querySelector('select');
var list = document.querySelector('ul')
var h1 = document.querySelector('h1')

select.onchange = function() {
  var choice = select.value;
  var days = 31; 
  if(choice === '02') {
    days = 28;
  } else if (choice === '04' || choice === '06') {
    days = 30; 
  }

  createCalendar(days, choice)
}

function createCalendar(days, choice) {
  list.innerHTML = ''; 
  h1.textContent = choice; 
  for(var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    list.item.textContent = i;
    list.appendChild(listItem)
  }
}

createCalendar(31, 'January');



// -------- Ejercicio 2

var select = document.getElementById('#colors');
var html = document.querySelector('.output'); 

select.onchange = function () {
  var choice = select.value;
}

switch(choice) {
  case 'black': 
    update('black', 'white');
    break;
  case 'white': 
    update('white', 'black');
    break;
  case 'purple': 
    update('purple', 'white');
    break;
  case 'yellow': 
    update('yellow', 'darkgray');
    break;
  case 'psychedelic': 
    update('lime', 'purple');
    break;
} 

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor; 
}

