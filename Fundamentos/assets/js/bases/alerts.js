// Alert
alert('Hola Mundo!');

// let nombre = prompt('¿Cuál es tu nombre?', 'John Doe');
console.log('Bienvenido: ' + nombre);

// Prompt
// Imprime un string vacío, si el usuario no ingresa nada en el prompt y solo da clic en "aceptar"
let nombre = prompt('¿Cuál es tu nombre?');
console.log(nombre);// ''
console.log('****' + nombre + '****');// ''

// Confirm
const selection = confirm('¿Está seguro de borrar esto?'); // Regresa booleanos true o false
console.log(selection);

console.log(global);