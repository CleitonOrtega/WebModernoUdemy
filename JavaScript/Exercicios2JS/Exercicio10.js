/*
Elabore uma função que recebe um número
como parâmetro e retorne uma string com
o símbolo "+" na quantidade especificada
no parâmetro. 
*/

const quantidadeDeMais = (quantidade) =>{
    let maisFinal = ''

    for(let i = 0; i < quantidade; i++){
        maisFinal +=  '+'
    }

    return maisFinal
}

console.log(quantidadeDeMais(1))
console.log(quantidadeDeMais(5))