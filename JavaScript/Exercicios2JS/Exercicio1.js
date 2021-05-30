/*
Crie uma função que retorna a string "Olá, "concatenada
com um argumento text (a ser passado para a função) e com
ponto de exclamação "!" no final.
 */

function concatenando(textoParaConcatenacao){
    const textoFinal = "Olá, ".concat(textoParaConcatenacao, "!")
    console.log(textoFinal)
}

concatenando("Cleiton")