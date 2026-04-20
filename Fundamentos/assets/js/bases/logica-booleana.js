console.log('Lógica booleana');

const trueBack = () => {
  console.log('Regresa true');
  return true;
};
const falseBack = () => {
  console.log('Regresa false');
  return false;
};
/* 
La negación en js es el signo de admiración "!".

Se puede hacer la negación en cualquier cosa que regrese un valor
booleano.
*/
// negación !
console.warn('NOT');
console.log(true); // true
console.log(!true); // false
console.log(!false); // true
console.log(!falseBack()); // true

/* 
El operador and && nos sirve para realizar diferentes comparaciones.

Regresa true, si todos los valores son verdaderos.
*/
// and &&
console.warn('AND');
console.log(true && true); // true
console.log(true && false); // false si se hace la negación del false - !false = true
console.log(false && false); // false
console.log(false && true); // false

console.log('==========');
console.log(falseBack() && trueBack()); // false
console.log(trueBack() && falseBack()); // false

// Regresa falso si trueBack es verdadera.
trueBack() && falseBack();
console.log('===== && =====');
// Como no regresa verdadero, solo se va ejecutar falseBack();
falseBack() && trueBack();

console.log('4 condiciones', true && true && true && false); // false
console.log('4 condiciones', true && true && true && !false); // true

/* 
OR ||

Es lo opuesto de and &&, para que or regrese true, por lo menos una condición de
lo que se evalúa debe ser true.
*/
// OR ||
console.warn('OR');
console.log(true || false); // true
console.log(false || false); // false

console.log(trueBack() || falseBack()); // true
console.log('4 condiciones', true || true || true || false); // true


// Asignaciones
console.warn('Asignaciones');
const varUndefined = undefined;
const varNull = null;
const varFalse = false;
// const varTrue = true;

const a1 = false && 'Hola Mundo' && 150; //
const a2 = 'Hola' && 'Mundo' && varFalse && true; //
const a3 = varFalse || 'Ya no soy false';
const a4 = varFalse || varUndefined || varNull || 'Ya no soy false de nuevo' || true;
const a5 = varFalse || varUndefined || trueBack() || 'Ya no soy false de nuevo' || true;

console.log({ a1, a2, a3, a4, a5 });

/* 
Si se vuelve muy elaborado, se debe buscar la manera de simplificar y resumir de manera
que quede más fácil de leer para el dev.
*/
// No debe existir más de 3 condiciones.
if (falseBack() && trueBack() && (true || false || true)) {
  console.log('hacer algo');
} else {
  console.log('hacer otra cosa');
};