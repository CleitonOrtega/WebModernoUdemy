/*
Escreva um algoritmo que leia o código de
um aluno e suas três notas. Calcule a média
ponderada do aluno, considerando que o peso
para a maior nota seja 4 e para as duas
restantes, 3. Mostre o código do aluno, suas
três notas, a média calculada e uma mensagem
"APROVADO" se a média for maior ou igual a 5 e
"REPROVADO" se a média for menor que 5. Repita
a operação até que o código lido seja negativo. 
*/

function calculoMedia(nota1, nota2, nota3){
    return ((nota1 * 4) + (nota2 * 3) + (nota3 * 3))/10
}

const retornoAprov = (nota1,nota2,nota3) => {
    let notaFinal = calculoMedia(nota1,nota2,nota3).toFixed(2)
    if(notaFinal > 4 && notaFinal < 11){
        console.log(`Sua nota final foi: ${notaFinal} você esta APROVADO!`)
    }else if(notaFinal > -1 && notaFinal < 5){
        console.log(`Sua nota final foi: ${notaFinal} você esta REPROVADO!`)
    }else{
        console.log(`A nota final foi: ${notaFinal} esta é uma nota invalida!`)
    }
}

retornoAprov(10,10,10)
retornoAprov(6,6,6)
retornoAprov(5,5,5)
retornoAprov(3,3,3)
retornoAprov(0,0,0)
retornoAprov(-10,-7,-3.7)