console.log('Funciones lambda');


// Funciones de flecha también conocidas como lambda functions - introducido en ECMAScript 6 de 2015.
// Los paréntesis para los argumentos son opcionales, pero es buena practica dejar los paréntesis.
const helloArrow = (name) => { // Más eficientes y evita problemas con un objeto especial llamado this.
  console.log('Hola Mundo mediante funciones de flecha.');
  console.log('Hola ' + name + ' desde funciones de flecha con argumentos');
};
helloArrow('Jonathan');

