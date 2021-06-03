/*
Desenvolva uma função que receba como parâmetro
um número de 1 a 10. Internamente, na função, será
gerado um número aleatório de 1 a 10. A função
deverá retornar se o parâmetro de entrada foi
igual ao número sorteado internamente. Se o valor
fornecido foi o sorteado, retorne "Parabéns! O
número sorteado foi o X". Se não for igual, retorne
"Que pena! O número sorteado foi o X". X é o número
que foi sorteado. 
*/

const sorteioNumero = (numeroParaVerificacao) =>{
    let numeroAleatorioFinal = numeroAleatorio()
    if(numeroParaVerificacao == numeroAleatorioFinal){
        return `Parabéns! O número sorteado foi o ${numeroParaVerificacao}`
    }else{
        return `Que pena! O número sorteado foi o ${numeroAleatorioFinal}`
    }
}

const numeroAleatorio = () => Math.floor(Math.random() * (10.0 - 1.0) + 1.0)

console.log(sorteioNumero(10))
console.log(sorteioNumero(5))
console.log(sorteioNumero(5))