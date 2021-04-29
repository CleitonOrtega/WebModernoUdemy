/*
 *Aula sobre Let em loop 2 
 */

 var funcs = []
 for(let i = 0; i < 10; i++ ){
     //Criando uma função para a array e adicionando la dentro o i
     funcs.push(function(){
         console.log(i)
     })
 }
 //Conceito de closer
 funcs[2]()
 funcs[8]()