/*
 *Aula sobre funções basicas 
 */
//Criando a função, a estrutura da função é function nomeDaFuncao(variaveis)
//{objetivo da função}
//Neste caso a função é para imprimir a soma
function imprimirSoma(a, b){
    console.log(a + b)
}

//Faz a soma sem problemas e retorna 5
imprimirSoma(2, 3)
//Faz a soma porém retorna um NaN pois ela tenta somar 2 com undefined
imprimirSoma(2)
//Pega os dois primeiros parametros e faz a soma e ignora o restante
imprimirSoma(2, 10, 4, 6)
//Retorna um NaN pois tem 2 undefined
imprimirSoma()

//Criando uma função que retorna um valor mas não o imprime igual a primeira função
//no segundo parametro deixamos o b ja setado caso não receba nenhum valor
function fazerSubtracao(a, b = 1 ){
    return a - b
}

console.log("\nChamando a função de subtração")
//Imprimimos a função que ficaria 3 - 2 = retorno 1
console.log(fazerSubtracao(3, 2))
//Não passamos o segundo parametro fazendo com que use o padrão que é 1
console.log(fazerSubtracao(5))
//Faz a conta de Undefined - 1 o que retorna um NaN como no imprimirSoma(2)
console.log(fazerSubtracao())