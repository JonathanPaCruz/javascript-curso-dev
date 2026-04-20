// funciones: Retorno de las funciones.
function displayData(name) {
  console.log('Bienvenido ' + name);
  return 10;
  // Esto jamas se va a ejecutar.
  // console.log('Soy un console.log que está después del return');
};
const returnGreeting = displayData('Jonathan');
console.log({ returnGreeting });


// Return un arreglo
function returnArray() {
  console.log('Return de array');
  return [1, 2, 3, 4, 5];
}
const returnTotal = returnArray();
console.log(returnTotal); // Se imprime [1,2,3,4,5]
// Si solo quiero retornar cierto valor:
console.log(returnTotal[0], returnTotal[4]);


// Ejercicio:
function add(a, b) {
  return a + b;
}
// Método 1:
console.log('El resultado de la suma es: ' + add(2, 4));
// Método 2:
const resultAdd = add(5, 6);
console.log('El resultado de la suma es: ' + resultAdd);


// Función flecha
const sumar = (a, b) => {
  return a + b;
}
console.log('El resultado de la suma de: ' + sumar(7, 2));


// En una función flecha unicamente se tiene un return (una linea de código dentro) se puede resumir de la siguiente manera:
const adding = (a, b) => a + b;
console.log('El resultado de la suma de: ' + adding(5, 3));


// Ejemplo:
function getRandom() {
  return Math.random();
};
console.log(getRandom());


// Ejercicio: Transformar la función de aleatorio en una función de flecha, sin llaves {}.
const getAleatorio = () => Math.random(); // Función de flecha anónima.
console.log(getAleatorio());