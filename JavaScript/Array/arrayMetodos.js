/*
 *Aula sobre metodos para array 
 */

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Excliu a ultima posição, em outras palavras Massa quebrou o carro!!
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona na ultima posição!
console.log(pilotos)

pilotos.shift() //Remove a primeira posição!
console.log(pilotos)

pilotos.unshift('Hamilton')//Adiciona na primeira posição!
console.log(pilotos)

//Splice pode adicionar ou remover elementos

//Adicionar
pilotos.splice(2,0,'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1) 
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Cria novo array a partir do indice
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Criar novo array com as posições selecionadas
console.log(algunsPilotos2)