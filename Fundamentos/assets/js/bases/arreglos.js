console.log('Arreglos en javascript');

// Van desde el 0 al N.
// let videoJuegos = ['Mario 3[0]', 'Megaman[1]', 'Chrono Trigger[2]'];
let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoJuegos }); // Imprime todo el arreglo.
// Imprime el valor en la posición [0] : Megaman.
console.log(videoJuegos[0]); // Solo imprime la pos[0] del arreglo: 

// Ejercicio.
// Una forma de crear arreglos pero no es la tradicional.
const arreglo = new Array(10);
console.log(arreglo);

// Usualmente se usa esta forma:
const arr = []; // Creando un arreglo vacío.
console.log(arr);

let arregloCosas = [
  true,
  123,
  'Jonathan',
  1 + 2,
  function () { },
  () => { },
  { a: 1 },
  ['x', 'Megaman', 'Zero', 'Dr. Light', [
    'Dr. willy',
    'Woodman',
  ]],
];

console.log({ arregloCosas });
// Accedemos primero a la pos[7] del arreglo "arregloCosas" y luego a la pos[3] del arreglo que esta dentro del arreglo "ArregloCosas"

// Acceder al arreglo dentro del arreglo : resultado "Dr. Light"
console.log(arregloCosas[7][3]);

// Acceder al arreglo dentro de un arreglo que esta dentro de otro arreglo : resultado "woodman"
console.log(arregloCosas[7][4][1]); 
