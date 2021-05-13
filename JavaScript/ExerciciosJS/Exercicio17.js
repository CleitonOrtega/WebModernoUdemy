/*
Um funcionário irá receber um aumento de acordo com
o seu plano de trabalho, de acordo com a tabela
abaixo:
Plano/Aumento:
A    /10%
B    /15%
C    /20%
Faça uma função que leia o plano de trabalho e o salário
atual de um funcionário e calcula e imprime o seu novo
salário. Use a estrutura switch e faça um caso default
que indique que o plano é inválido.
*/
const novaRemuneracao = (salario, planoAumento) =>{

    switch(planoAumento.toUpperCase()){
        case 'A':
            console.log(`O salario atual é: ${salario}, seu novo salario é: ${salario * 1.10}`)
            break
        case 'B':
            console.log(`O salario atual é: ${salario}, seu novo salario é: ${salario * 1.15}`)
            break
        case 'C':
            console.log(`O salario atual é: ${salario}, seu novo salario é: ${salario * 1.20}`)
            break
        default:
            console.log(`Você escolheu a opção ${planoAumento} e é uma opção invalida!`)
    }
}

novaRemuneracao(1000, 'a')
novaRemuneracao(1000, 'b')
novaRemuneracao(1000, 'c')
novaRemuneracao(1000, 'd')