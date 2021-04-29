/*
 *Aula sobre funções 2 
 */
//Armazenando uma função em uma constante
const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variavel
const soma = (a , b) => {
    return a + b
}

console.log(soma(3, 3))

//return implicito (no caso não precisaremos chamalo)
const substracao = (a, b) => a - b
console.log(substracao(5, 3))

//return implicito só que de string
const mostrarPalavra = palavra => palavra
console.log(mostrarPalavra("eita"))
