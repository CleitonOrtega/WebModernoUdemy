/*
 *Aula com desafio sobre Map 3 
 */
Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

 const carrinho = [
    '{"Nome": "Borracha", "Preco": 3.45}',
    '{"Nome": "Caderno", "Preco": 13.90}',
    '{"Nome": "Kit de Lapis", "Preco": 41.22}',
    '{"Nome": "Caneta", "Preco": 7.50}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = carrinho => carrinho.Preco

const precos = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(precos)