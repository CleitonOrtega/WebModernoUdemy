/*
 *Aula sobre var em loop 
 */
//Criei o laço e criei o i que vai até o 10
 for(var i = 0; i < 10 ;i++){
    console.log('i dentro do for = ',i)
 }
 //Ao final o i foi criado globalmente e ficou com o valor final de 10!
 console.log('i fora do for = ', i)