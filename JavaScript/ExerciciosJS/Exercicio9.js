/*
Construa uma função para um sistema de notas de
uma instituição que possui a seguinte política
de classificação: Todo aluno recebe uma nota de
0 a 100. Alunos com nota abaixo de 40 são reprovados.
As notas possuem a seguinte regra de arredondamento:
Se a diferença entre a nota e o próximo múltiplo de
5 for menor que 3, arredondar a nota para esse
próximo múltiplo de 5. Se a nota for abaixo de
38, não é feito nenhum arredondamento pois esta
nota resulta na reprovação do aluno. Por exemplo,
a nota 84 será arredondada para 85, mas a nota
29 não será arredondada por ser abaixo de 40 e
não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de
a nota ser 38, o arredondamento é possível pois
atingirá 40 e o aluno será aprovado.
*/

function notaAluno(notaFinal){
    if(notaFinal >= 0 && notaFinal < 38){
        return 'Aluno Reprovado!'
    }else if(notaFinal > 37 && notaFinal < 101){

        for(let i = 0; i < 101; i += 5){
            if(i > notaFinal){
                notaFinal = notaFinal + (i - notaFinal)
                break
            }
        }
        return `Aluno aprovado com a nota: ${notaFinal}`
    }else{
        return 'Nota Invalida!'
    }
}

console.log(notaAluno(0))
console.log(notaAluno(-1))
console.log(notaAluno(101))
console.log(notaAluno(38))