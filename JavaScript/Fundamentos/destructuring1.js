/*
 *Aula sobre destructuring 1 
 */
//metodo para desestruturar e retornar algo dentro de um objeto
const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobreNome, bemHumorado = true } = pessoa
console.log(sobreNome, bemHumorado)

const { endereco: { logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)