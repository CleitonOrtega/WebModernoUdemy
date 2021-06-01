/*
Desenvolva uma função que recebe como parâmetro
um objeto e retorne um array de arrays, em que
cada elemento é um array formado pelos pares
chave/valor que corresponde a um atributo do
objeto. Observe os exemplos abaixo para um
melhor entendimento: 
*/
const objetoInicial = {
    nome: "Cleiton",
    idade: 19
}

function conversorObjParaArray(objetoParaConversão) {
    const arrayPronta = []
    for (let chave in objetoParaConversão)
        arrayPronta.push([ chave , objetoParaConversão[chave] ])
        
    console.log(arrayPronta)
}
    

conversorObjParaArray(objetoInicial)