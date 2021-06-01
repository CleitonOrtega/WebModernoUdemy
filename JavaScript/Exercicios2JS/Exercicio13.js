/*
Crie uma função que receba um array de
elementos e retorne um array somente com
os números presentes no array recebido
como parâmetro. 
*/

const arrayDeElementos = ["a", "d", "z", 1, "f", true, 5, 7, "2"]

function separadorDeNumeros(arrayComDiversosDados){
    let arrayDeNumeros = []
    for(let i = 0; i < arrayComDiversosDados.length ;i++){
        if(typeof arrayComDiversosDados[i] == "number"){
            arrayDeNumeros.push(arrayComDiversosDados[i])
        }
    }

    return arrayDeNumeros
}

console.log(separadorDeNumeros(arrayDeElementos))