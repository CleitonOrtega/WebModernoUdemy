/*
Faça um algoritmo que calcule o fatorial de um número.
*/

const fatorial = (numeroFatorial) => {
    if(numeroFatorial < 0){
        console.log(`O numero ${numeroFatorial} é invalido!`)
    }else if(numeroFatorial == 0 || numeroFatorial == 1){
        console.log(`O numero fatorial de ${numeroFatorial} é 1`)
    }else{
        let resultadoFinal = numeroFatorial
        for(let i = 1; i < numeroFatorial; i++){
            resultadoFinal *= i
        }
        console.log(`O numero fatorial de ${numeroFatorial} é ${resultadoFinal}`)
    }
}

fatorial(-1)
fatorial(0)
fatorial(1)
fatorial(2)
fatorial(3)
fatorial(4)