/*
Crie uma função que receba uma array e retorne
o primeiro e o último elemento desse array como
um novo array:
*/
const arrayPassada = [ 1, 2, 3, 5]
function separadorArrays(arrayBase){
    let novaArray = []
    novaArray.push(arrayBase[0])
    novaArray.push(arrayBase[arrayBase.length - 1])

    return novaArray
}

console.log(separadorArrays(arrayPassada))