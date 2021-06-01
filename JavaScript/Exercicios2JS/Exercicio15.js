/*
Elabore uma função que receba um array de
números e retorne um array que tenha todos
os números que são pares e que também tenham
índices pares. 
*/

function verificadorPares(arrayVerificadora){
    let arrayVerificada = []

    for(let i = 0; i < arrayVerificadora.length; i++){
        if(i % 2 == 0 && arrayVerificadora[i] % 2 == 0){
            arrayVerificada.push(arrayVerificadora[i])
        }
    }

    return arrayVerificada
}

console.log(verificadorPares([1, 2, 3, 4]))
console.log(verificadorPares([10, 70, 22, 43]))