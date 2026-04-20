/* 
Alternativa if-else
Ejercicio sin usar if-else o switch
Usando objetos o arreglos: para realizar la misma tarea e incluir en consola el día de la semana.
*/

// Mi solución:
const day = 5;
const weekDay = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
console.log(weekDay[day] || 'Día no definido.');

// Solución del curso:
/* 
Se pueden ejecutar procedimientos, usando función de flecha.
*/
const dayLetras = {
  0: 'Domingo - 0',
  1: 'Lunes - 1',
  2: 'Martes - 2',
  3: 'Miércoles - 3',
  4: 'Jueves - 4',
  5: 'Viernes - 5',
  6: 'Sábado - 6',
};
console.log(dayLetras[day]);