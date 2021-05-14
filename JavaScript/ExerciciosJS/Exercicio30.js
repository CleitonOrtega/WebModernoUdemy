/*
Escreva um algoritmo que percorre um vetor de inteiros
e defina o maior e menor valor dentro do vetor.
*/
const vetorNum = [2,58,4,1,6,41,100,5,59,5]

function verificadorNumeros(vetorNumerico){
    let maiorNumero = vetorNumerico[0]
    let menorNumero = vetorNumerico[0]

    for(let i = 0; i < vetorNumerico.length; i++){
        if(vetorNumerico[i] > maiorNumero){
            maiorNumero = vetorNumerico[i]
        }else if(vetorNumerico[i] < menorNumero){
            menorNumero = vetorNumerico[i]
        }
    }

    return `O maior numero é: ${maiorNumero} e o menor é: ${menorNumero}`
}

console.log(verificadorNumeros(vetorNum))