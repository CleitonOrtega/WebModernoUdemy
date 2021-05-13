/*
Faça um programa que leia um número entre 0 e 10,
e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número
fora do intervalo.’ 
*/

function lerNumeroPorExtenso(numero){
    switch(numero){
        case 1:
            console.log("1 - Um")
            break
        case 2:
            console.log("2 - Dois")
            break
        case 3:
            console.log("3 - Três")
            break
        case 4:
            console.log("4 - Quatro")
            break
        case 5:
            console.log("5 - Cinco")
            break
        case 6:
            console.log("6 - Seis")
            break
        case 7:
            console.log("7 - Sete")
            break
        case 8:
            console.log("8 - Oito")
            break
        case 9:
            console.log("9 - Nove")
            break
        case 10:
            console.log("10 - Dez")
            break
        default:
            console.log("Número fora do intervalo!")
    }
}

lerNumeroPorExtenso(1)
lerNumeroPorExtenso(2)
lerNumeroPorExtenso(3)
lerNumeroPorExtenso(4)
lerNumeroPorExtenso(5)
lerNumeroPorExtenso(6)
lerNumeroPorExtenso(7)
lerNumeroPorExtenso(8)
lerNumeroPorExtenso(9)
lerNumeroPorExtenso(10)
lerNumeroPorExtenso(11)