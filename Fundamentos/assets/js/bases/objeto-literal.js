// let personaje = {}; Cuando veamos las llaves {} quiere decir que es un objeto literal
// Objeto literal es conocido por tener pares de valores.

const personaje = {
  name: 'Jonathan',
  lastName: 'Pacheco Cruz',
  nickname: 'Jodatrash',
  codeName: 'JP50114',
  isAlive: true,
  age: 27,
  coords: {
    lat: 34.034,
    lgn: -118.70
  },
  works: ['Consultor', 'Desarrollador backend', 'Soporte L3'],
  address: {
    zip: 19901,
    street: 'test',
    state: 'California',
  },
  'ultima-pelicula': 'El botín',
};
console.log(personaje);
console.log('Nombre: ', personaje.name); // 1er manera para mostrar los datos.
console.log('Apellidos: ', personaje.lastName);
// console.log('Nombre: ', personaje['name']); // 2da manera para mostrar los datos.
console.log('Edad: ', personaje.age);
console.log('Nickname: ', personaje.nickname);

// Obtener los datos anidados - latitud.
console.log('Coordenadas: ', personaje.coords);
console.log('Latitud: ', personaje.coords.lat);
console.log('Longitud: ', personaje.coords.lgn);
console.log('No. Trabajos: ', personaje.works.length);
console.log('Ultimo trabajo: ', personaje.works[personaje.works.length - 1]);

const x = 'isAlive';
console.log('Vivo: ', personaje[x]);
console.log('Última película:', personaje["Ultima-pelicula"]);


// Más detalles sobre los objetos literales.
// Se quiere borrar una propiedad, p.e. edad (age).
delete personaje.age;
console.log(personaje);

// Crear una nueva propiedad en el objeto que va suceder o que se va a crear en el momento de ejecución, se debe definir o hacer mención.
personaje.casado = true;
console.log(personaje);

// Suponiendo que ahora se quiere trabajar el objeto como arreglo
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

// Si no quiero que se modifique "personaje" -> cambiar a const para que sea inmutable.
// No es como se cree, lo que nos permite es bloquear este tipo de asignación:

// personaje = []; un nuevo objeto {}, un nuevo arreglo [] o cualquier cosa que se quiera.
// personaje = true;

// Para hacer un bloque de las propiedades o de las modificaciones.
Object.freeze(personaje);
// Bloqueando nuevas propiedades.
personaje.dinero = 1000000;
// Bloqueando propiedades existentes:
personaje.casado = false;

// Object.freeze, simplemente congela las asignaciones a cada una de las propiedades directas, pero no a los objetos que están dentro del objeto, p.e.
personaje.address.state = 'Tamaulipas';
console.log(personaje);


// Se requiere un listado de todas las propiedades que tiene ese objeto.
const properties = Object.getOwnPropertyNames(personaje);
const values = Object.values(personaje);
console.log(properties, values);

