/*
 *Aula sobre Try/Catch/Throw 
 */
function tratarErroELancar(erro){
    throw new Error('Mensagem personalizada!')
    /*
    throw 10
    throw true
    throw 'String'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
     */
    
}

function imprimirNomeGritando(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){ 
        tratarErroELancar(e)
    }finally{
        console.log("Final do Try/Catch")
    }
}

const obj = {name: 'Roberto'}
imprimirNomeGritando(obj)