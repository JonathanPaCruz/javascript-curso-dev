console.log('Valor y referencia.');

// En js, todos los objetos son pasados por referencia.
// Todos los primitivos son pasados por valor.
// Todos los objetos son pasados por referencia.
// En js, todos son objetos excepto los primitivos.

let a = 10, b = a;
a = 30;

console.log({ a, b });

let juan = { name: 'juan' }; // juan: {name: 'juan'}
// Usando el operador spread "..."
let ana = { ...juan }; // ana: {name: 'ana'}

ana.name = 'Ana';

console.log({ juan, ana }); // juan: {name: 'juan'}, ana: {name: 'ana'}

// const changeName = (persona) => {
//   persona.name = 'Jonathan'
//   return persona;
// };

// Resolviendo el caso para la función
const changeName = ({ ...persona }) => {
  persona.name = 'Jonathan'
  return persona;
};


let peter = { name: 'Peter' };
let jonathan = changeName(peter);

console.log({ peter, jonathan });


// Cuando se ponen los "..." dentro de una función en el argumento,
// p.e. const changeName = (...persona) <- es un parámetro rest y quiere decir
// que une todos los argumentos en una sola variable y lo transforma como un arreglo.

// Cuando se utiliza fuera, es decir en cualquier otro lugar, es el operador spread y
// simboliza separar los elementos, la ventaja de hacerlo de esta manera es que también rompe
// la referencia que existe en javascript y de esa manera se puede trabajar los objetos y hacer
// igualaciones que apunten a diferentes espacios en memoria.
// p.e. let ana = { ...juan };


// Ejercicio - arreglos
const frutas = ['Pera', 'Manzana', 'Fresa', 'Mango'];
// Si esto es un arreglo, la recomendación es poner "frutas" entre [] ya que es un nuevo arreglo.
// se utiliza el operado spread para separar cada uno de los elementos que vienen en el arreglo
// y retornarlo de una manera independiente, rompiendo dicha relación.
console.time('spread');
const printFrutas1 = [...frutas];
console.timeEnd('spread');
// Otra manera de romper la relación es con ".slice()" al enviar sin ningún argumento, crea un nuevo argumento.
console.time('slice');
const printFrutas2 = frutas.slice();
console.timeEnd('slice');

// Agregando más frutas
printFrutas1.push('Piña');
printFrutas2.push('Piña');

console.table({ frutas, printFrutas1, printFrutas2 });