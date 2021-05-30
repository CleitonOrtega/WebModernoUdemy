/*
Crie uma função que receba dois números e retorne
se o primeiro é maior ou igual ao segundo. 
*/

function maiorOuIgual(primeiroNumero, segundoNumero){
    if(typeof primeiroNumero != typeof segundoNumero){
        return false
    }
    else if(primeiroNumero === segundoNumero){
        return true
    }else if(primeiroNumero >= segundoNumero){
        return true
    }else{
        return false
    }
}

console.log(maiorOuIgual(0,0))
console.log(maiorOuIgual(0,"0"))
console.log(maiorOuIgual(5,1))
console.log(maiorOuIgual(1,5))