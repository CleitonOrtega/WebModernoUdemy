/*
Utilizando a estrutura de repetição for, faça
uma função que percorra um vetor e conte quantos
números deste vetor estão no intervalo [10,20]
(repare que o intervalo é fechado, ou seja, inclui
o 10 e o 20) e quantos deles estão fora do intervalo,
escrevendo estas informações. 
*/
let vetorNumeros = [1,2,10,15,20,21,22]

function contadorIntervalo(vetorNum){
    let dentroIntervalo = 0
    let foraIntervalo = 0
    let totalNumeros = 0

    for(let i = 0; i < vetorNum.length; i++){
        if(vetorNum[i] > 9 && vetorNum[i] < 21){
            dentroIntervalo++
            totalNumeros++
        }else{
            foraIntervalo++
            totalNumeros++
        }
    }

    console.log(`No total tem ${totalNumeros}, ${dentroIntervalo} dentro do intervalo e ${foraIntervalo} fora do intervalo!`)
}   

contadorIntervalo(vetorNumeros)