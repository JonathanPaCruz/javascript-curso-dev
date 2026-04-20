console.log('Arreglos 2da parte');

let juegosArr = ['Zelda', 'Mario', 'Minecraft', 'Terraria'];

console.log({ juegosArr });
// Obtener el largo de un arreglo.
console.log('Largo: ', juegosArr.length);

// Obtener por posición.
let first = juegosArr[0];
console.log(first);
let second = juegosArr[1];
console.log(second);
let third = juegosArr[2];
console.log(third);
let fourth = juegosArr[3]
console.log(fourth);

let primero = juegosArr[2 - 2]; // 2 -2 = 0 o sea seria la pos[0] :: Zelda
console.log({ primero });

//Obtener la ultima pos del arreglo sin necesidad de pasar por cada uno de los items dentro del arreglo.
let lastPos = juegosArr[juegosArr.length - 1];
console.log({ lastPos });
console.log({ primero, lastPos });

// En caso de necesitar recorrer cada uno de los elementos, para ejecutar algún tipo de procedimiento
// existe el un método interesante de los arreglos que es el forEach
// El forEach va a ejecutar una instrucción por cada uno de los elementos que se encuentra en el arreglo.
juegosArr.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

// push = método para insertar un nuevo elemento, al final del arreglo.
let longitud = juegosArr.push('F-Zero');
console.log({ longitud, juegosArr });

// unshift  = método para insertar un nuevo elemento, al principio del arreglo.
longitud = juegosArr.unshift('Hytale');
console.log({ longitud, juegosArr });

// pop  = método para borrar el ultimo elemento del arreglo.
let deleteGame = juegosArr.pop();
console.log({ deleteGame, juegosArr });

// Borrar un juego según la posición que se requiera.
let pos = 1;
console.log(juegosArr);
let deletedGame = juegosArr.splice(pos, 2); // Borrar 2 datos, a partir de la posición 1 (definido en let pos = 1)
console.log({ deletedGame, juegosArr });

// Saber la posición indice de un dato.
let posTerraria = juegosArr.indexOf('Terraria'); // Recordar el caseSensitive
console.log({ posTerraria, juegosArr }); // Si regresara -1 quiere decir que no lo encontró.

// TODO: Referencia.
