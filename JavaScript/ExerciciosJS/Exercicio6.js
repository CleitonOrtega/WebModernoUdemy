/*
Elabore duas funções que recebem três parâmetros:
capital inicial, taxa de juros e tempo de aplicação.
A primeira função retornará o montante da aplicação
financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros
compostos.
*/

function jurosSimples(capitalInicial, taxaDeJuros,tempoAplicado){
    console.log(`Os juros finais é: ${capitalInicial * taxaDeJuros * tempoAplicado}`)
}

jurosSimples(1000,0.10,3)

function jurosCompostos(capitalInicial, taxaDeJuros,tempoAplicado){
    console.log(`Os juros finais é: ${(capitalInicial * Math.pow((1 + taxaDeJuros), tempoAplicado)).toFixed(2).replace('.',',')}`)
}

jurosCompostos(2000,0.04,4)