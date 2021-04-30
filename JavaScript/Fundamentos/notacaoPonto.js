/*
 *Aula sobre Notação Ponto 
 */
//Notação . serve para acessar algo dentro de um objeto ou algo assim
console.log(typeof console)
//Por exemplo dentro da biblioteca Math temos as funções ceil e floor e para acessar uma delas usamos a notação
// . para falar que queremos algo dentro da biblioteca Math
console.log(Math.ceil(6.1))
console.log(Math.floor(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec...')
    }
}

const Obj2 = new Obj('Mesa')
const Obj3 = new Obj('Cadeira')
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()