/*
 *Aula sobre parametros entre modulos 
 */

module.exports = function(...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}