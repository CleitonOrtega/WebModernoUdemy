/*
Crie uma função que recebe um número (de 1 a 12 e
retorne o mês correspondente como uma string. Por
exemplo, se a entrada for 2, a função deverá retornar
"fevereiro", pois este é o 2° mês. 
*/

const verificadorMes = (numeroMes) =>{
    switch(numeroMes){
        case 1:
            return "O mês é Janeiro!"
        case 2:
            return "O mês é Fevereiro!"
        case 3:
            return "O mês é Março!"
        case 4:
            return "O mês é Abril!"
        case 5:
            return "O mês é Maio!"
        case 6:
            return "O mês é Junho!"
        case 7:
            return "O mês é Julho!"
        case 8:
            return "O mês é Agosto!"
        case 9:
            return "O mês é Setembro!"
        case 10:
            return "O mês é Outubro!"
        case 11:
            return "O mês é Novembro!"
        case 12:
            return "O mês é Dezembro!"
        default:
            return "O mês é Invalido!"
    }
}

console.log(verificadorMes(1))
console.log(verificadorMes(4))
console.log(verificadorMes(7))
console.log(verificadorMes(10))
console.log(verificadorMes(13))