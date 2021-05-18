/*
Faça uma função que receba como parâmetro um vetor
de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D,
de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a
8,9 o conceito B e de 9,0 a 10,0 o conceito A.
*/

const notas = [-1 ,1.1, 5.0, 7.0, 8.5, 10.0]

function verificadorNotas(vetorNotas){
    let notasEmLetras = []
    for(let i = 0; i < vetorNotas.length; i++   ){
        if(vetorNotas[i] < 0){
            notasEmLetras[i] = 0
        }else if(vetorNotas[i] < 5.0){
            notasEmLetras[i] = 'D'
        }else if(vetorNotas[i] < 7.0){
            notasEmLetras[i] = 'C'
        }else if(vetorNotas[i] < 9.0){
            notasEmLetras[i] = 'B'
        }else{
            notasEmLetras[i] = 'A'
        }
    }
    return notasEmLetras
}

console.log(verificadorNotas(notas))