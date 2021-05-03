/*
 *Aula sobre destructuring 2 
 */
//usando o destructuring em uma array
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6] = [10, 7, 9, 8]
console.log(n1,n3,n5,n6)

const[, [, nota,nota1]] = [ [,8,8] , [9,6,8]]
console.log(nota,nota1)