/*
 *Aula sobre Objetos 
 */

//Um objeto é um conjunto de chave e valor como pergunta e resposta
const prod1 = {}
//Atribundo chave e o valor associado a ela
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
//Criando uma chave e o valor associado a ela de uma maneira errada pois
//cria um "espaçamento" entre elas
prod1['Desconto legal'] = 0.40 //Evitar atributos com espaço

//Mostrando o objeto prod1
console.log(prod1)

//Criando e atribuindo os valores as chaves do objeto
const prod2 = {
    nome : 'Camisa Polo',
    preco : 79.90,
    //Criando um novo objeto dentro do objeto prod2
    novoObj : {
        mostrando : 1,
        //Criando um novo objeto dentro do objeto novoObj
        //Obs: tem o mesmo nome do objeto de fora e não da
        //conflito pois ele esta "abaixo" na hierarquia e não
        //no mesmo nivel caso tivesse o mesmo nome e no mesmo
        //nivel daria conflito de nomes
        novoObj: {
            mostrando : 2
        }
    }
}

console.log(prod2)