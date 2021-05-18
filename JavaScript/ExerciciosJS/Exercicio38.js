/*
Escreva uma função que receba dois parâmetros
início e fim. Essa função deve imprimir todos
os números ímpares que estão entre esses valores.
Por padrão os valores devem ser 0 para início e
100 para fim. Atente para corrigir a ordem dos
parâmetros caso a função receba o valor maior
antes do menor. 
*/

function verificadorMaior(primeiroNumero, segundoNumero){
    if(primeiroNumero == segundoNumero){
        return 0
    }else if(primeiroNumero > segundoNumero){
        return 1
    }else{
        return 2
    }
}

function localizadorImpares(menorNumero ,maiorNumero){
    let vetorImpares = []

    if(menorNumero > maiorNumero){
        for(let i = maiorNumero; i <= menorNumero; i++){
            if(i % 2 == 1){
                vetorImpares.push(i)
            }
        }
    }else{
        for(let i = menorNumero; i <= maiorNumero; i++){
            if(i % 2 == 1){
                vetorImpares.push(i)
            }
        }
    }
    return vetorImpares
}

const imprimirImpares = (numeroInicial = 0, numeroFinal = 100) => {
    const separador = verificadorMaior(numeroInicial, numeroFinal)
    const impares = [] = localizadorImpares(numeroInicial,numeroFinal)

    if(separador == 0){
        console.log(`Os numeros são iguais!`)
    }else if(separador == 1){
        console.log(`Os numeros impares são: ${impares}`)
    }else{
        console.log(`Os numeros impares são: ${impares}`)
    }
}

imprimirImpares(3,3)
imprimirImpares(7,3)
imprimirImpares()