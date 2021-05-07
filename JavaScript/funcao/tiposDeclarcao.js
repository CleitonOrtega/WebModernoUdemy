/*
 *Aula sobre tipos de declaração 
 */
//posso chamar a functino declaratino antes dela estar declarada pois
//o JS carrega as funções primeiro então o JS ve que existe a função
//e a puxa para cima isso com o function declaration para as demais
//da um erro
console.log(soma(3, 4))

 //function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
    return x - y
}
console.log(sub(3, 4))

//named function expression
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3,4))

