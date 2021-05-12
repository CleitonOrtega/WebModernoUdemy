/*
As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se
ele é ano bissexto, imprimindo no console a mensagem e
retornando true ou false. 
*/
const calcAnoBissexto = function(anoAtual){
    
    if(anoAtual <= 0){
        return false
    }else if(anoAtual%400 == 0){
        return true
    }else if(anoAtual%100 == 0){
        return false
    }else if(anoAtual%4 == 0){
        return true
    }else{
        return false
    }
}

console.log(calcAnoBissexto(2))
console.log(calcAnoBissexto(4))
console.log(calcAnoBissexto(100))
console.log(calcAnoBissexto(400))
console.log(calcAnoBissexto(2000))
console.log(calcAnoBissexto(2021))