/*
 *Aula sobre estrutura break e continue
 */
const num = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//break faz o bloco de repetição mais proximo parar
for(let x in num){
    if(x == 5){
        break
    }
    console.log(`X = ${num[x]}`)
}

//continue faz o bloco de repetição pular algo em questão o indice 5
for(let y in num){
    if(y == 5){
        continue
    }
    console.log(`Y = ${num[y]}`)
}

//Chamando o break para um bloco em especifico neste caso usamos o break para
//o bloco externo
externo: for (let a in num){
    for(let b in num){
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`)
    }
}