/*
 Escrever um algoritmo que percorre um vetor de
 inteiros, conta quantos números negativos há nesse
 vetor e imprime a quantidade no console. 
*/

const vetorInteiros = [-7 , -3 , 0 , 2 , 8]

function divisorNegativos([]){

    let numerosNegativos = 0
    let qtdTotal = 0
    for(let i = 0; i < vetorInteiros.length; i++){
        if(vetorInteiros[i] < 0){
            numerosNegativos++
        }
        qtdTotal++
    }

    return `A quantidade de numeros negativos é ${numerosNegativos} e a quantidade total no vetor é ${qtdTotal}`
}

console.log(divisorNegativos(vetorInteiros))