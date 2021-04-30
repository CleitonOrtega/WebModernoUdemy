/*
 *Aula sobre Função Vs Objeto 
 */
console.log(typeof Object)
console.log(typeof new Object)

//Podemos instanciar uma função então ela vira um Objeto!
const Cliente = function(){}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())