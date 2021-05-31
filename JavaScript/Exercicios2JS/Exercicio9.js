/*
Escreva uma função que receba dois parâmetros.
O primeiro parâmetro é o elemento que repetirá,
enquanto que o segundo será o número de vezes
que haverá repetição. Um array será retornado. 
*/

const preenchendoArray = (elementoAdicionado, numeroDeRepeticao) =>{
    let arrayFinal = []
    if(typeof numeroDeRepeticao != "number"){
        return `O segundo dado é um(a) ${typeof numeroDeRepeticao} digite um dado do tipo number!`
    }else{
        for(let i = 0; i < numeroDeRepeticao; i++){
            arrayFinal.push(elementoAdicionado)
        }
        return `A array final ficou assim: \n${arrayFinal}`
    }
}

console.log(preenchendoArray(5,5))
console.log(preenchendoArray("opa",3))
console.log(preenchendoArray(5,"a"))
console.log(preenchendoArray(5,true))