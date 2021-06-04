/*
Desenvolva uma função que receba uma string
como parâmetro e retorne essa string somente
com as consoantes, ou seja, sem as vogais.
*/

const removedorDeVogais = (palavra) =>{
    return palavra.replace(/[aeiou]/ig, '')
}

console.log(removedorDeVogais("Cod3r"))
console.log(removedorDeVogais("Fundamentos"))