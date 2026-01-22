console.log('%c >tipos de datos: Primitivos', 'color:red');


let nombre = 'Jonathan Pacheco' // String
console.log({ nombre });
nombre = '1er Saludo';
console.log({ nombre });
nombre = "2do Saludo";
console.log({ nombre });
nombre = `3er Saludo`;
console.log({ nombre });
console.log(typeof nombre);

let esMarvel = true; // Boolean
console.log(esMarvel);
console.log(typeof esMarvel);

let edad = 27; // Number
console.log(typeof edad);
edad = 27.005;
console.log(typeof edad);

// variables son camelCase
let variableCamelCase; // Undefined
console.log(variableCamelCase);

let itsNull = null; // Null
console.log(typeof itsNull);

let symbolUno = Symbol('a'); // Symbol
let symbolDos = Symbol('a');
console.log(typeof symbolUno);
console.log(typeof symbolDos);
console.log(symbolUno === symbolDos); // false
