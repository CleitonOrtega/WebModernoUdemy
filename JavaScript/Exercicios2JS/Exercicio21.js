/*
Criar uma função que receba um array de
números e retorne o menor número desse
array. 
*/
const array1 = [10, 5, 35, 65]
const array2 = [5, -15, 50, 3]

function verificadorMenor(arrayDeNumeros){
    let menorNumero = arrayDeNumeros [0]
    for(let i = 0; i < arrayDeNumeros.length ;i++){
        if(menorNumero > arrayDeNumeros[i]){
            menorNumero = arrayDeNumeros[i]
        }
    }
    console.log(menorNumero)
}

verificadorMenor(array1)
verificadorMenor(array2)