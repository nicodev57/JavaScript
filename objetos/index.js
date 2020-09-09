
//objeto en JS
var perro = {
  nombre: 'lucas',
  edad: 2,
  vivo: false
}



//Constructores de objetos

function Perro (nombre, edad, vivo) {
  this.nombre = nombre; 
  this.edad = edad; 
  this.vivo = vivo; 
}

var perro1 = new Perro('Tommy', 5, true); 
// con new creamos una nueva instancia en el objeto
var perro2 = new Perro('Lucrecio', 6, true);

console.log(perro1);
console.log(perro2);


//Objetos dentro de un array
function Perro (nombre, edad, vivo) {
  this.nombre = nombre; 
  this.edad = edad; 
  this.vivo = vivo; 
}

var perro1 = new Perro('Tommy', 5, true); 
// con new creamos una nueva instancia en el objeto
var perro2 = new Perro('Lucrecio', 6, true);

var animal = [perro1, perro2]
console.log(animal);




// crear array con diferentes objetos

var gato = [
  {
    nombre: 'pepe',
    edad: 2
  },
  {
    nombre: 'tomson',
    edad: 3
  }
]

console.log(gato);