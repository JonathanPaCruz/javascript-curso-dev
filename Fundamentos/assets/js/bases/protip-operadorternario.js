// const maxNumber = (a, b) => {
//   return (a > b) ? 'a es mayor' : 'b es mayor';
// }

/* Simplificado */
const maxNumber = (a, b) => (a > b) ? 'a es mayor' : 'b es mayor';

const hasMember = (member) => (member) ? '$2' : '$10'

console.log(maxNumber(50, 50));
console.log(hasMember(true))

const friend = true;
const friendArr = [
  'Peter',
  'Tony',
  'Dr strange',
  friend ? 'Thor' : 'loki',
  // (() => 'Otro más')()
  maxNumber(10, 15)
]
console.log(friendArr);


const nota = 82.5;
const grado = nota >= 95 ? 'A+' :
  nota >= 90 ? 'A' :
    nota >= 85 ? 'B+' :
      nota >= 80 ? 'B' :
        nota >= 75 ? 'C+' :
          nota >= 70 ? 'C' : 'F';
console.log({ nota, grado });