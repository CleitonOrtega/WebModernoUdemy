/*
 *Aula sobre como evitar modificações em objetos! 
 */
//Object.preventExtensions
//Serve para não colocar mais nada, porém pode alterar e até mesmo apagar!
const produto = Object.preventExtensions({
    nome: 'Bala', preco: 0.05, tag: 'Promoção'
})
console.log('Extensivel: ', Object.isExtensible(produto))

produto.nome = 'Bolacha'
produto.descricao = 'Bolacha traquinas'
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome:'Cleiton', idade: 19 }
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))

pessoa.sobrenome = 'Ortega'
delete pessoa.nome
pessoa.idade = 20
console.log(pessoa)

//Object.freeze = selado + valores constantes!