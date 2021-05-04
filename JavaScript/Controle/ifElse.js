/*
 *Aula sobre estrutura de decisão if else 
 */
const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log("Aprovado!")
    }else{
        console.log("Reprovado!")
    }
}

imprimirResultado(10)

imprimirResultado(4)
//Retorna Reprovado! pois recebeu uma String e acabou n fazendo a comparação
imprimirResultado('Epa!')