/*
Ler um vetor de números inteiros e imprimir 
quantos são pares e quantos são ímpares. 
*/

let vetorNumerosInteiros = [1,2,3,4,5,6,7,8,9,10]

const contadorParImpar = (vetor) => {
    let par = 0
    let impar = 0
    for(let i = 0; i < vetor.length;i++){
        if(vetor[i] % 2 == 0){
            par++
        }else{
            impar++
        }
    }
    return `Ao final da conta temos ${par} numeros pares e ${impar} numeros impares`
}

console.log(contadorParImpar(vetorNumerosInteiros))