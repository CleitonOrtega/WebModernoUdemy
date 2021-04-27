/*
 *Aula falando um pouco sobre String 
 */
const escola = "Cod3r"

//Metodo para pegar a letra em questão pela sua posição sempre começa em 0
console.log(escola.charAt(4))
//Caso não tenha esta posição ele retorna '' porém não da erro!
console.log(escola.charAt(5))

//Metodo para retornar o valor da caracter na tabela ask
console.log(escola.charCodeAt(3))

//Metodo para retornar a posição da letra passada no parametro
console.log(escola.indexOf('r'))

//Metodo para pegar uma palavra a partir de uma posição passada no parametro
console.log(escola.substring(1))
//Metodo para pegar uma palavra e passar a posição inicial e a final 
console.log(escola.substring(0,3))

//Metodo de concatenação 
console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')

//Metodo para substituir algo da frase por outro dado como por exemplo substituir
//o 3 por 'e' esse metodo só funciona caso o parametro passado esteja dentro da string
console.log(escola.replace(3, 'e'))
//Metodo para substituir tudo da frase por algo no caso 'a'
console.log(escola.replace(/\w/g, 'a'))

//Metodo para transformar a string em uma array passando como o parametro de 
//divisão a ','
console.log('Ana,Maria,Pedro'.split(','))