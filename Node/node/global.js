/*
 *Aula sobre Objeto Global no Node 
 */

//console.log(global)
global.MinhaApp = Object.freeze( {
    saudacao(){
        return 'Estou em todos lugares!'
    },
    nome: 'Sistema Legal'
})