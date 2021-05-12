/**
Crie um programa que exibe se um dia é dia útil,
fim de semana ou dia inválido dado o número referente
ao dia. Considere que domingo é o dia 1 e sábado é o
dia 7. Utilize a estrutura Switch.
*/

const diaUtil = function(diaEmQuestao){

    switch(diaEmQuestao){
        case 1:
            return `O dia da semana em questão é o domingo`
        case 2:
            return `O dia da semana em questão é o Segunda-Feira`
        case 3:
            return `O dia da semana em questão é o Terça-Feira`
        case 4:
            return `O dia da semana em questão é o Quarta-Feira`
        case 5:
            return `O dia da semana em questão é o Quinta-Feira`
        case 6:
            return `O dia da semana em questão é o Sexta-Feira`
        case 7:
            return `O dia da semana em questão é o Sabado`
        default:
            return `O dia da semana em questão é invalido!`
    }
}

console.log(diaUtil(0))
console.log(diaUtil(1))
console.log(diaUtil(2))
console.log(diaUtil(3))
console.log(diaUtil(4))
console.log(diaUtil(5))
console.log(diaUtil(6))
console.log(diaUtil(7))