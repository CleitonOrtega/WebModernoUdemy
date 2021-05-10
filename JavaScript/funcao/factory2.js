/*
 *Aula sobre Função Factory 2
 */

function criarProduto(nome, preco){
    return {
        nome: nome,
        preco,
        desconto: 0.10 * preco,
        ValorFinal: 0.90 * preco
    }
}

console.log(criarProduto('Feijão', 20))
console.log(criarProduto('Arroz', 32))