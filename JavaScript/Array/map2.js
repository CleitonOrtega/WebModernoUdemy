/*
 *Aula com desafio sobre Map 2 
 */

const carrinho = [
    '{"Nome": "Borracha", "Preco": 3.45}',
    '{"Nome": "Caderno", "Preco": 13.90}',
    '{"Nome": "Kit de Lapis", "Preco": 41.22}',
    '{"Nome": "Caneta", "Preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = carrinho => carrinho.Preco

const precos = carrinho.map(paraObjeto).map(apenasPreco)

console.log(precos)