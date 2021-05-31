/*
Desenvolva uma função que recebe dois números
inteiros não negativos (maiores ou iguais a
zero) e realize a multiplicação deles. Porém,
não utilize o operador de mutiplicação.
*/

function multiplicadorSemOperador(primeiroNumero, segundoNumero){
    let valorFinal = 0

    if(primeiroNumero < 0 || segundoNumero < 0){
        console.log("Você digitou o primeiro ou o segundo numero invalido!")
    }else{
        for(let i = 0; i < segundoNumero; i++){
            valorFinal += primeiroNumero
        }
        console.log(valorFinal)
    }
}

multiplicadorSemOperador(5, 5)
multiplicadorSemOperador(0, 7)
multiplicadorSemOperador(0, -7)