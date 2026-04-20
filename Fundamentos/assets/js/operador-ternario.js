/*
Días de la semaba abrimos a las 11,
pero lo sfunes de semana abrimos a las 9
*/

// Entra a un sitio web, para consultar si esta abierto hoy...

const day = 1;
const actualTime = 11;

let openTime, message;

// if (day === 0 || day === 6) {
// if ([0, 6].includes(day)) {
//   console.log('Fin de semana');
//   openTime = 9;
// } else {
//   console.log('Entre semana');
//   openTime = 11;
// }

openTime = ([0, 6].includes(day)) ? 9 : 11;

// if (actualTime >= openTime) {
//   message = 'Está abierto'
// } else {
//   message = `Está cerrado, hoy abrimos: ${openTime}`;
// }

message = (actualTime >= openTime) ? 'Está abierto' : `Está cerrado, hoy abrimos: ${openTime}`;

console.log({ openTime, message });
