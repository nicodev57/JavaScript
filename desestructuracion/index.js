let a, b, rest; 
[a, b] = [10, 20]; 

console.log(a, b);
// output 10 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(a);
console.log(b);
console.log(rest);
// output:
// 10
// 20
// [ 30, 40, 50 ]

// -----> dentro de objetos: 

({a, b} = {a: 10, b: 20});
console.log(a);
console.log(b);
// output: 
// 10
// 20

({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}


// --------> examples

// asignación de variables básica
const foo = ['one', 'two', 'three'];

const [red, yellow, green] = foo; 
console.log(red);
console.log(yellow);
console.log(green);
// output
// one
// two
// three



// --------> Desestructuración de objetos

const user = {
    name: 'Nicolás',
    last: 'Valencia'
}

const {name, last} = user; 
console.log(name); // Nicolás
console.log(last); // Valencia



