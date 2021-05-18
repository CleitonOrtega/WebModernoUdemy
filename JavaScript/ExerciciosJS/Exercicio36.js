/*
Crie duas funções que recebem dois parâmetros,
um vetor com apenas valores numéricos e um número
inteiro. Faça com que a primeira função retorne
outro vetor que será resultado da multiplicação
de cada elemento pelo número passado como parâmetro.
A segunda função fará o mesmo da primeira se e somente
se o valor do elemento for maior que 5. 
*/

const vetor = [1,2,3,4,5,6]

const funcaoMultiplica = (vetor) => {

    let vetorMultiplicado = []

    for(let i = 0; i < vetor.length; i++){
        if(i != 0){
            vetorMultiplicado.push(vetor[i] * vetor[i - 1])
        }
    }
    return `Vetor Multiplicado é: ${vetorMultiplicado}`
}

const funcaoMultiplicaElemento5 = (vetor) => {

    let vetorMultiplicado = []

    for(let i = 0; i < vetor.length; i++){
        if(i != 0 && vetor[i] >= 5){
            vetorMultiplicado.push(vetor[i] * vetor[i - 1])
        }
    }
    return `Vetor Multiplicado é: ${vetorMultiplicado}`
}

console.log(funcaoMultiplica(vetor))
console.log(funcaoMultiplicaElemento5(vetor))