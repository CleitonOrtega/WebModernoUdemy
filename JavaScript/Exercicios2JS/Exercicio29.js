/*
Crie uma função que recebe um array de números e
retorna o segundo maior número presente nesse array.
*/

function verificadorSegundoMaior(arrayDeNumeros){

    const maiorNumero = Math.max(...arrayDeNumeros)
    numeros = arrayDeNumeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)

    return segundoMaior
}

console.log(verificadorSegundoMaior([12, 16, 1, 5]))
console.log(verificadorSegundoMaior([8, 4, 5, 6]))