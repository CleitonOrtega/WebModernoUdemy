/*
O cardápio de uma lanchonete é o seguinte:
Código     /Descrição do Produto     /Preço
100        /Cachorro Quente          /R$ 3,00
200        /Hambúrguer Simples       /R$ 4,00
300        /Cheeseburguer            /R$ 5,50
400        /Bauru                    /R$ 7,50
500        /Refrigerante             /R$ 3,50
600        /Suco                     /R$ 2,80
Implemente uma função que receba como parâmetros
o código do item pedido, a quantidade e calcule o
valor a ser pago por aquele lanche. Considere que
a cada execução somente será calculado um item.
Use o comando switch. Crie um caso default para
produto não existente.
*/

const contaFinal = (codigoProd, quantidade = 1) => {
    switch(codigoProd){
        case 100:
            return `O valor final é R$${quantidade * 3}`
        case 200:
            return `O valor final é R$${quantidade * 4}`
        case 300:
            return `O valor final é R$${quantidade * 5.5}`
        case 400:
            return `O valor final é R$${quantidade * 7.5}`
        case 500:
            return `O valor final é R$${quantidade * 3.5}`
        case 600:
            return `O valor final é R$${quantidade * 2.8}`
        default:
            return `O código ${codigoProd} não esta no catalogo!`
    }
}

console.log(contaFinal(100, 2))
console.log(contaFinal(200))
console.log(contaFinal(300, 2))
console.log(contaFinal(400, 2))
console.log(contaFinal(500, 2))
console.log(contaFinal(600, 2))
console.log(contaFinal(1000, 2))