/*
 *Aula sobre Var em loop 2 
 */

var funcs = []
for(var i = 0; i < 10; i++ ){
    //Criando uma função para a array e adicionando la dentro o i
    funcs.push(function(){
        console.log(i)
    })
}
//Sempre retorna para o ultimo i
funcs[2]()
funcs[8]()