/*
 *Aula sobre como entender o this 
 */
console.log(this === global)
console.log(this === module)
 
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    //isso leva para o global!!!
    this.perigo = '...'
}

logThis()