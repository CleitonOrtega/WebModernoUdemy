/*
Da para declarar numeros de 2 maneiras a primeira é apenas
atribuindo o valor a segunda é declarando o tipo da const
no caso Number('2.0') porém poderia ser sem aspás que tambem
daria certo, e o JS olha para o valor e desconsidera aspás
em um dos console.log eu imprimi o valor da soma dos numeros
e o resultado veio normal apesar da const peso2 estar em aspás
*/
const peso1 = 1.1
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(peso1 + peso2)
//Testando se o numero é inteiro ou não
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

/*
aqui eu trago o valor da media que é um numero quebrado e logo
em seguida eu trago um metodo para escolher o tanto de casas
decimais mostrar que no caso eu escolhi 2 também posso transformar
em uma string ou em um valor binario com o mesmo metodo mudando
apenas o parametro do toString colocando um parametro 2 como mostro
nas proximas linhas mas nada disso muda a tipagem da variavel
 */
console.log(media)
console.log(media.toFixed(2))
console.log(media.toString())
console.log(media.toString(2))
console.log(typeof media)