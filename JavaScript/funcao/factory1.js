/*
 *Aula sobre Função Factory 
 */
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco: 123 
}

//Função factory tem o objetivo de criar um objeto a partir da chamada de uma função
//Função factory simples!
function criarPessoa(){
    return {
        nome: 'Ana',
        sobreNome: 'Silva'
    }
}

console.log(criarPessoa())