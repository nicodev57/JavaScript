// convert number to string

// .toString();
function convertNumberToString(number){
  return number.toString();
}

console.log(convertNumberToString(42));
console.log(convertNumberToString(97));
console.log(convertNumberToString(11));

// convert string to number

// .parseInt
function convertStringToNumber(string){
  return Number.parseInt(string)
}

//sample usage
console.log(convertStringToNumber("42"));
console.log(convertStringToNumber("97"));
console.log(convertStringToNumber("11"));


// ------------- división

function divideNumbers(a, b){
  return a / b ;
  // return a % b para obtener el residuo
}

//sample usage
console.log(divideNumbers(8, 2));
console.log(divideNumbers(10, 5));


// ---- retornar si un numero es par 

function isEven(x){
  return x % 2 === 0;
  // return x % 2 !== 0; retornar si es impar 
}

//sample usage
console.log(isEven(4)); // true
console.log(isEven(5)); // false
console.log(isEven(6)); // true


