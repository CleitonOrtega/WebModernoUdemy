/*
 *Aula sobre hoisting 
 */
//A variavel a foi definida depois de ser chamada porém não retorna erro pois ela foi criada
//em algum momento do código
console.log('Valor de a = ', a)
var a = 2
console.log('Valor de a = ', a)

//Já a let daria erro pois ela tem que ser inicializada antes de ser chamada!
/*
console.log('\nValor de b = ', b)
let b = 3
console.log('Valor de b = ', b)
*/