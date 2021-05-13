/*
Utilizando a estrutura do Switch faça um programa que
simule uma calculadora básicaO programa recebe como
parâmetros dois valores numéricos e uma string referente
à operação e a realize com os valores numéricos na ordem
que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3).
A função efetuará a soma de 2 e 3. Dica: Os sinais das
operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default
para operações inválidas.
*/

function calcBasica( primeiroOperando, segundoOperando, operacao){
    switch(operacao){
        case '+':
            return `A operação escolhida foi '${operacao}' e o resultado é ${primeiroOperando + segundoOperando}`
        case '-':
            return `A operação escolhida foi '${operacao}' e o resultado é ${primeiroOperando - segundoOperando}`
        case '*':
            return `A operação escolhida foi '${operacao}' e o resultado é ${primeiroOperando * segundoOperando}`
        case '/':
            return `A operação escolhida foi '${operacao}' e o resultado é ${primeiroOperando / segundoOperando}`
        default:
            return 'Operador invalido!'
    }
}

console.log(calcBasica(8,8,'+'))
console.log(calcBasica(10,2,'-'))
console.log(calcBasica(2,2,'*'))
console.log(calcBasica(4,2,'/'))
console.log(calcBasica(1,2,'a'))