console.log('Funciones en javascript');

// Funciones básicas.

// Sirven para centralizar la lógica de un procedimiento y reutilizar o ejecutar varias veces
// Buena practica que las definiciones de las funciones siempre estén al principio y abajo el llamado de las mismas.
function saludar() { // Forma tradicional de escribir una función.
  console.log('Hola Mundo');
};
saludar();

// Otra manera de declarar una función a esta se le conoce como función anónima, pues no tiene nombre.
// Beneficio: Como se asigna a una constante, no hay manera de que pueda ser reutilizado en la app.
const saludo = function () {
  console.log('Hola Mundo, mediante función anónima');
};
saludo();

// Argumentos dentro de la función.
function helloName(name) {
  console.log('Hola ' + name + '!');
};
helloName('Jonathan');

// Argumentos dentro de la función definida por const - función anónima.
const helloNameConst = function (name) {
  console.log('Hola ' + name + '!');
};
helloNameConst('test');

// Que ocurre si se manda más argumentos y no están definidos.
// Solo funciona en funciones tradicionales, es decir llevan implícito la palabra function.
function moreArguments(name) {
  console.log(arguments);
  console.log('Saludos: ' + name);
};
moreArguments('Jonathan', 27, true, 'México');





