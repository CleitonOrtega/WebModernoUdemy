/*
A fim de manter o calendário anual ajustado com o
movimento de translação da Terra, criou-se os anos
bissextos, que têm 366 dias em vez dos 365 presentes
nos anos normais.
Para determinar se um ano é bissexto, é necessário
saber se ele é multiplo de 4. Não pode ser múltiplo
de 100, exceto se for também múltiplo de 400.
Com isso em mente, desenvolva uma função que recebe
um número correspondente a um ano e retorna se ele
é bissexto ou não. 
*/

function verificadorAnoBissexto(anoParaVerificacao){
    let totalAnosBissextos = false
    for(let i = 0;i < anoParaVerificacao ;i++){
        if(anoParaVerificacao % 4 == 0 && anoParaVerificacao % 400 == 0 || anoParaVerificacao % 100 != 0){
            totalAnosBissextos = true
        }
    }
    return totalAnosBissextos
}

console.log(verificadorAnoBissexto(2020))
console.log(verificadorAnoBissexto(2100))
console.log(verificadorAnoBissexto(2200))
console.log(verificadorAnoBissexto(2300))
console.log(verificadorAnoBissexto(2400))