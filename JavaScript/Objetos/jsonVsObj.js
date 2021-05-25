/*
 *Aula sobre Json e a diferença em relação ao Obj 
 */

const obj = { a:1, b:2, c:3, soma(){ return a + b + c} }
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{ a:1, b:2, c:3 }")) Errado!
//console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3 }")) Errado também!
console.log(JSON.parse('{ "a":1, "b":2, "c":3 }'))
console.log(JSON.parse('{ "a":1.7, "b":"String", "c": true, "d": {}, "e": [] }'))

//Site para validar o JSON: https://jsonlint.com