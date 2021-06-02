/*
Escreva uma função que receba um array de números
e retornará a soma de todos os números desse array.
*/

const somaArray = (arraySomatora) =>{
    let arraySomada = 0
    for(let i in arraySomatora){
        if(typeof arraySomatora[i] == "number"){
            arraySomada += arraySomatora[i]
        }
    }
    console.log(arraySomada)
}

somaArray([10, 10, 10])
somaArray([15, 15, 15])
somaArray([20, 20, 20, "Esse não entra!"])