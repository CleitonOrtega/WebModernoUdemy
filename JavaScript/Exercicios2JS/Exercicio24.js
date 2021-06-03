/*
Desenvolva uma função que recebe um caractere e
uma string como parâmetros e retorne a quantidade
de vezes que o caractere se repete na string. A
função deverá ser case-sensitive, ou seja, irá
diferenciar maiúsculas de minúsculas. 
*/

function contarCaracteres(caracterBase, fraseBase){
    const frase = fraseBase
    count = 0;
    pos = frase.indexOf(caracterBase)
    
    while ( pos != -1 ) {
       count++;
       pos = frase.indexOf( caracterBase, pos + 1 )
    }
    
    console.log(count)
}

contarCaracteres("r", "A sorte favorece os audazes")
contarCaracteres("c", "Conhece-te a ti mesmo")