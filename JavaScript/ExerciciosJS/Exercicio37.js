/*
Escreva duas funções, uma para progressão
aritmética e uma para progressão geométrica
que recebam como parâmetros um número n
(número de termo), a1 (o primeiro termo) e
r (a razão) e escreva os n termos , bem como
a soma dos elementos. 
*/

function progressaoAritmetica (n, a1, r) {
    for (let i = 0; i < n; i++) {
        console.log(a1 + r*i)
    }
    return `A soma é: ${(n * (a1 + (a1 + ((n-1)*r))))/2}`
}

function progessaoGeometrica (n, a1, r) {
    //console.log(a1)
    for(let i = 0; i < n; i++){
        console.log(a1*(r**i))
    }
    return `A soma é: ${(a1 * ((r**n)-1))/(r-1)}`
}

console.log("Progressão Aritmetica\n" + progressaoAritmetica(10, 10, 15))
console.log("\nProgressão Geometrica\n" + progessaoGeometrica(10, 5, 3))