/*
*Aula sobre Classe Vs Função Factory
*/

//Criando uma classe com o modelo de classe
function Pessoa(nome){
    this.nome = nome

    this.falar = function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()