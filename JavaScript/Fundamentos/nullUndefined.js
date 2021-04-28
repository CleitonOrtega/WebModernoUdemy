/*
 *Aula sobre null e Undefined 
 */
let valor //Undefined pois não foi inicializada ainda
console.log(valor)

valor = null //null = ausencia de valor ou seja foi inicializada porém não tem valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 5.0
console.log(produto)

produto.preco = undefined //Evite atribuir undefined, deixe que o JS veja o que é undefined
console.log(!!produto.preco)
//Caso queira excluir algo do objeto basta utilizar o delete produto.preco
console.log(produto)

produto.preco = null //Sem preço definido 
console.log(!!produto.preco)
console.log(produto)