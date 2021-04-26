/*
A tipagem de JS é fraca isso quer dizer que uma variavel
pode armazenar todo tipo de variavel como no proximo exemplo
a variavel que no caso é local(let) recebeu uma string depois
recebeu um numero real que é um numero quebrado depois recebeu
um numero inteiro que é do mesmo tipo do numero real(não
diferencia numeros reais de numeros inteiros para o JS
numero é numero e pronto) e logo em seguida recebeu um
valor boolean verdadeiro ou falso e sempre aceitou sem dar
erro!
*/
let palavra = 'Texto teste!'
console.log(palavra)
console.log(typeof palavra)

palavra = 3.1415
console.log(palavra)
console.log(typeof palavra)

palavra = 5
console.log(palavra)
console.log(typeof palavra)

palavra = true
console.log(palavra)
console.log(typeof palavra)

/*
Evitar palavras genéricas e siglas pois dificulta o entendimento
exemplos:
*/
let valor = ''
let numero = 1
let pqp = false //Produto Quimico Perigoso