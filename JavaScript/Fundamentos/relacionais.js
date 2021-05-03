/*
 *Aula sobre operadores relacionais 
 */
//Nesta aula vimos sobre o igual(==) e o estritamente igual (===)
//onde o igual pega o conteudo e o estritamente igual pega o conteudo
//e o tipo de dado como por exemplo string, number, boolean etc...
console.log('01)', '1' == 1)
console.log('02)', '1' === 1)
console.log('03)', 1 === 1)

console.log('04)', '3' != 3)
console.log('05)', '3' !== 3)

console.log('06)', 3 < 2)
console.log('07)', 3 > 2)
console.log('08)', 3 <= 2)
console.log('09)', 3 >= 2)

const d1 = new Date(0)
const d2 = new Date(0)

console.log('10)', d1 == d2)
console.log('11)', d1 === d2)
console.log('12)', d1.getTime === d2.getTime)
console.log('13)', undefined == null)
console.log('14)', undefined === null)