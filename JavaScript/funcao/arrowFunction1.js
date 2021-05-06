/*
 *Aula sobre arrow function
 */
//Function normal
let dobro = function(a){
    return 2 * a
}

//Arrow function só pode ser chamada armazenando ela em uma variavel ou constante
dobro = (a) => {
    return 2 * a
}

//Outro meio de criar uma arrow function com o return implicito
dobro = (a) => 2 * a
console.log(dobro(Math.floor(Math.PI)))

let ola = function(){
    return 'Olá'
}

ola = () => {
    return 'Olá'
}

ola = () => 'Olá'

console.log(ola())