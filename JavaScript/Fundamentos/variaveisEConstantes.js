/*
var é para variaveis globais onde você ve em todo o scopo do programa
let é para variaveis locais onde você ve apenas em um scopo especifico
como por exemplo em um bloco de chaves: { let a (let a só é visto dentro
das chaves) } 
*/
var a = 3
let b = 4

/*
var pode ser chamado novamente para declarar novos valores
porém tambem podemos apenas declarar um novo valor para ela
assim como foi feito na let
let não pode ser chamado novamente apenas pode ser chamado
e redeclarado o valor sem chamar o let pois da erro!
*/
var a = 30
b = 40

console.log(a, b)

/*
var com o mesmo modelo de let, apenas chamando a variavel
novamente e dando um novo valor para ela
*/
a = 300
b = 400

console.log(a, b)

/*
const é para uma constante um valor que não muda você não
pode mudar o valor caso tente irá dar erro!
assim como let é apenas local não pode ser chamada fora de
um bloco caso tenha sido criada dentro de um bloco porém 
em seus blocos derivados pode ser chamada
*/
const c = 5

console.log(c)