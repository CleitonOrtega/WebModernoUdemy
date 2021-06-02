/*
Faça uma função que recebe a base e a altura de
um triângulo e retorne a área desse triângulo.
A precisão deverá ser de duas casas decimais,
arredondando se necessário. 
*/

const formatacaoDeNumeros = (numeroParaFormatacao) => numeroParaFormatacao.toFixed(2).replace('.', ',')

const calculoTriangulo = (base, altura) => formatacaoDeNumeros((base * altura)/2)

console.log(calculoTriangulo(10, 15))
console.log(calculoTriangulo(7, 9))
console.log(calculoTriangulo(9.25, 13.1))