const heroes = ['Batman', 'Superman', 'Mujer maravilla', 'Acuaman', 'Flash'];

console.warn('for normal');
for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

console.warn('for in');
for (let i in heroes) {
  console.log(heroes[i]);
}

console.warn('for on')
for (let hero of heroes) {
  console.log(hero);
}