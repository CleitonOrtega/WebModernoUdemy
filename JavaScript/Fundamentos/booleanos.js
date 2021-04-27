/*
 *Aula sobre tipos booleanos 
 */
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//O 0 retorna false
isAtivo = 0
console.log(!!isAtivo)

//O 1 retorna true
isAtivo = 1
console.log(!!isAtivo)

//Alguns casos com o retorno true
console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//Alguns casos com o retorno false
console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

//No JS da para usar o || como um parametro e se caso algum deles retorne true
//ele imprime o valor apenas 1 por caso e sempre o primeiro
console.log('\nPra finalizar...')
console.log(!!(''|| null || 0 || ' ' || 'teste'))

const nomeVazio = ''
console.log(nome || 'Desconhecido')

const nome = 'Cleiton'
console.log(nome || 'Desconhecido')