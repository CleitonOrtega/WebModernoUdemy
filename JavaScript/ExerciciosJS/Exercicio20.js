/*
Crie um programa para informar quais e quantas 
notas são necessárias para entregar o mínimo de
cédulas para um determinado valor informado pelo
usuário considerando notas de R$100, R$50, R$10
e R$ 5 e R$ 1.
Seu programa deve mostrar apenas as notas utilizadas.
Por exemplo, ao solicitar R$18, o programa deve
informar apenas a seguinte informação (note que não
foram exibidas informações sobre as demais cédulas): 1
nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.
*/

function devolucaoNotas(valorSolicitado){
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    do{
        if(valorSolicitado >= 100){
            valorSolicitado -= 100
            nota100 ++
        }else if(valorSolicitado >= 50){
            valorSolicitado -= 50
            nota50 ++
        }else if(valorSolicitado  >= 10){
            valorSolicitado -= 10
            nota10 ++
        }else if(valorSolicitado  >= 5){
            valorSolicitado -= 5
            nota5 ++
        }else if(valorSolicitado >= 0){
            valorSolicitado -= 1
            nota1 ++
        }
    }while(valorSolicitado > 0)

    let resultado = ''

    if (nota100 > 0) {
        resultado += `\n${nota100} nota(s) de R$ 100. `
    }

    if (nota50 > 0) {
        resultado += `\n${nota50} nota(s) de R$ 50. `
    }

    if (nota10 > 0) {
        resultado += `\n${nota10} nota(s) de R$ 10. `
    }

    if (nota5 > 0) {
        resultado += `\n${nota5} nota(s) de R$ 5. `
    }

    if (nota1 > 0) {
        resultado += `\n${nota1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(devolucaoNotas(18))
console.log(devolucaoNotas(287))