/*
Os triângulos podem ser classificados em 3 tipos quanto ao
tamanho de seus lados: Equilátero: Os três lados são iguais.
Isósceles: Dois lados iguais. Escaleno: Todos os lados são
diferentes.
Crie uma função que recebe os comprimentos dos três lados de
um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as
condições matemáticas de existência de um triângulo).
*/

function ladosTriangulo(ladoA, ladoB, ladoC){
    if(ladoA == ladoB && ladoA == ladoC){
        return 'Os três lados são iguais então é um triangulo equilátero'
    }else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        return 'A dois lados iguais então é um triangulo Isósceles'
    }else{
        return 'Os três lados são diferentes então é um triangulo Escaleno'
    }
}

console.log(ladosTriangulo(1,1,1))
console.log(ladosTriangulo(1,1,2))
console.log(ladosTriangulo(1,2,2))
console.log(ladosTriangulo(2,1,2))
console.log(ladosTriangulo(1,3,2))