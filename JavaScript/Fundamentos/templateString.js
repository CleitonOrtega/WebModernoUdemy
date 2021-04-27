/*
 *Falando sobre template String 
 */
//Alguns jeitos de concatenação
const nome = 'Cleiton'
const concatenacao = 'Olá ' + nome + '!'
//Metodo diferente de concatenação com template String
const template = `
    'Olá' ${nome}! `

console.log(concatenacao,template)

//Dentro do ${} o comportamento é "normal" e fora dele mas dentro das ``
//ele considera que é apenas texto exceto pelo ${}
console.log(`1 + 1 = ${1 + 1}`)

//Aqui temos uma aero function porém não entramos muito a fundo mas
//acredito que a função dela e criar funções de maneira mais rapidas
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}'!'`)