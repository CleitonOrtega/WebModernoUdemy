/*
Crie três vetores, chamados vetorInteiro, vetorString
e vetorDouble. Cada um destes vetores deverá conter
quatro valores, sendo o primeiro com valores inteiros,
o segundo com strings e o terceiro com valores decimais.
Declarados os vetores, utilize a função de união concat()
de duas maneiras diferentes para unir os vetores, e mostre
o resultado no console. Todos os elementos do vetor resultado
deverão aparecer no console.
*/

const vetorInteiro = [1, 2, 3, 4]
const vetorString = ['Possição 0','Possição 1','Possição 2','Possição 3']
const vetorDouble = [1.1, 2.2, 3.3, 4.4]

function concatenandoVersao1(vetorInteiro,vetorString,vetorDouble){
    console.log(`\nTeste concat 1`)
    console.log(`Vetor Inteiro : ${vetorInteiro}`)
    console.log(`Vetor String : ${vetorString}`)
    console.log(`Vetor Double : ${vetorDouble}`)
    console.log(`${vetorInteiro.concat(vetorString.concat(vetorDouble))}`)
}

function concatenandoVersao2(vetorInteiro,vetorString,vetorDouble){
    console.log(`\nTeste concat 2`)
    console.log(`Vetor Inteiro : ${vetorInteiro}`)
    console.log(`Vetor String : ${vetorString}`)
    console.log(`Vetor Double : ${vetorDouble}`)
    console.log(`${vetorInteiro.concat()} + ${vetorString.concat()} + ${vetorDouble}`)
}

concatenandoVersao1(vetorInteiro,vetorString,vetorDouble)
concatenandoVersao2(vetorInteiro,vetorString,vetorDouble)