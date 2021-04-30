/*
 *Aula sobre Par e Valor 
 */
//Contexto léxico 1 léxico é o local onde o par chave e valor foi definido
const saudacao = 'Olá!'

function exec(){
    //contexto léxico 2
    const saudacao = 'Opa'
    return saudacao
}

//Objeto são grupos de pares chave/valor
const Cliente = {
    nome : 'Pedro',
    idade : 32,
    peso : 90,
    endereco : {
        logradouro : 'Rua Teste Testoso!',
        numero : 123
    }
}
//Contexto léxico 1 retornou Olá! pois foi o primeiro contexto lexico
console.log(saudacao)
//Contexto léxico 2 retornoy Opa pois foi definido na função o valor dele
console.log(exec())
console.log(Cliente)
