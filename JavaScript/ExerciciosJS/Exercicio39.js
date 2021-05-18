/*
Crie uma função que receba dois vetores de
igual tamanho e troque seus elementos de modo
que o primeiro elemento do vetorA passe a ser
o primeiro elemento do vetorB e vice versa e
assim sucessivamente.
Faça a troca sem utilizar uma variável auxiliar. 
*/

const vetorA = [0, 1, 2]
const vetorB = [3, 4, 5]

function trocadorVetores(primeiroVetor, segundoVetor){

    console.log(`Primeiro vetor original: ${primeiroVetor}`)
    console.log(`Segundo vetor original: ${segundoVetor}`)
    
    if(primeiroVetor.length != segundoVetor.length){
        console.log("Vetores de tamanhos diferentes!")
    }else{
        for(let i = 0; i < primeiroVetor.length; i++){
            primeiroVetor[i] = primeiroVetor[i] + segundoVetor[i]
            segundoVetor[i] = primeiroVetor[i] - segundoVetor[i]
            primeiroVetor[i] = primeiroVetor[i] - segundoVetor[i]
        }
    }

    console.log(`\nNovo primeiro vetor! : ${primeiroVetor}`)
    console.log(`Novo segundo vetor! : ${segundoVetor}`)
}

trocadorVetores(vetorA, vetorB)