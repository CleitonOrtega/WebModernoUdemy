/*
Numa aplicação Web de investimento financeiro da
qual você faz parte da equipe de desenvolvimento,
pretende-se adicionar a funcionalidade de calcular
a média de um conjunto de números informados pelo
usuário.
Com o intuito de realizar esse cálculo, crie uma
função que receba um array com uma quantidade
indeterminada de números e retorne a média simples
desses números. 
*/

const mediaFinal = (numeroFinal, qtdNumeros) => numeroFinal / qtdNumeros

function criadorMedia(arrayComNumeros){
    let numerosSomados = 0
    let qtdNumeros = 0

    for(let i in arrayComNumeros){
        if(typeof arrayComNumeros[i] == "number"){
            numerosSomados += arrayComNumeros[i]
            qtdNumeros++
        }
    }

    return mediaFinal(numerosSomados, qtdNumeros)
}

console.log(criadorMedia([0, 10]))
console.log(criadorMedia([1, 2, 3, 4, 5]))