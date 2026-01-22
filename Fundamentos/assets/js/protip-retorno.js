// function crearPersona(nombre, apellido) {
//   return {
//     nombre,
//     apellido
//   }
// };

// Función anónima flecha (normal)
// const crearPersona = (nombre, apellido) => {
//   return { nombre, apellido }
// }


function imprimeArgumentos() { // Tradicional
  console.log(arguments);
}
imprimeArgumentos('Hola', true, 27, 'Tamaulipas');

// Flecha -> no maneja el objeto de arguments, como en las funciones tradicionales
// NOTA: Después del parámetro rest "...args", No puede venir otro parámetro, pero si se puede acceder a los argumentos antes del parámetro.
const imprimeArgumentos2 = (saludo, ...args) => { // Para acceder a los argumentos se requiere agregar "..." + un nombre, para identificar los argumentos, p.e. "...args"
  //console.log({ saludo, args }); // Se llama al argumento -> "args"
  return args;
}
// Ejemplo: Me interesa saber si es casado, edad y país, dejando de lado el saludo
const [casado, edad, país] = imprimeArgumentos2('Hola', true, 27, 'México');
console.log({ casado, edad, país });

// Función anónima flecha (una sola linea)
const crearPersona = (nombre, apellido) => ({ nombre, apellido });

const persona = crearPersona('Jonathan', 'Pacheco');
console.log(persona);

// Ejemplo: Solo me interesa obtener el apellido.
const { apellido: lastName } = crearPersona('Jonathan', 'Pacheco');
console.log({ lastName });

// Des-estructuración de objetos.

const employee = {
  name: 'Jonathan',
  lastName: 'Pacheco Cruz',
  nickname: 'Jodatrash',
  codeName: 'JP50114',
  isAlive: true,
  age: 27,
  works: ['Consultor', 'Desarrollador backend', 'Soporte L3'],
};

// Definimos función
// const printProperties = (character) => {
//   console.log('name: ', character.name);
//   console.log('lastName: ', character.lastName);
//   console.log('nickname: ', character.nickname);
//   console.log('codeName: ', character.codeName);
//   console.log('isAlive: ', character.isAlive);
//   console.log('age: ', character.age);
//   console.log('works: ', character.works);
// };

const printProperties = ({ name, lastName, nickname, codeName, isAlive, age = 0, works }) => {
  // age = age || 0;
  console.log({ name });
  console.log({ lastName });
  console.log({ nickname });
  console.log({ codeName });
  console.log({ isAlive });
  console.log({ age });
  console.log({ works });
};
printProperties(employee);