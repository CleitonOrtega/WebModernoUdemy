/*
Construir um algoritmo que calcule a média
aritmética dos valores de um vetor de inteiros. 
*/

const vetorInteiros = [10, 10, 10, 10]

const mediaAritmeticaVetor = ([]) => {
    let tamanhoVetor = 0
    let agregadoNumeros = 0
    let mediaVetor = 0
    for(let i = 0; i < vetorInteiros.length; i++){
        agregadoNumeros += vetorInteiros[i]
        tamanhoVetor++
    }
    mediaVetor = agregadoNumeros/tamanhoVetor

    return `A media do vetor é ${mediaVetor}`
}

console.log(mediaAritmeticaVetor(vetorInteiros))