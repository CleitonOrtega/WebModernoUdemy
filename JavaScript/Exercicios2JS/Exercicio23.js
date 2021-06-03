/*
Criar uma função que receba uma string
como parâmetro e conte quantas palavras
tem nela. 
*/

const primeiraFrase = "Sou uma frase"
const segundaFrase = "Me divirto aprendendo a programar"

function contadorDePalavras(fraseParaAnalise){
    let fraseComoArray = fraseParaAnalise.split(' ')

    return fraseComoArray.length
}

console.log(contadorDePalavras(primeiraFrase))
console.log(contadorDePalavras(segundaFrase))