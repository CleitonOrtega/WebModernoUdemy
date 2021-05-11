/*
Crie uma função que recebe dois parâmetros,base
e expoente, e retorne a base elevada ao expoente. 
*/

function baseExpoente(base, expoente){
    let valorTotal = base
    for(let i = 1; i < expoente; i++){
        valorTotal = valorTotal * base
    }
    console.log(`O resultado final é: ${valorTotal}`)
}

baseExpoente(1,3)
baseExpoente(2,4)
baseExpoente(3,3)
baseExpoente(4,3)