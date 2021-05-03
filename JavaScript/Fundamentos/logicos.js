/*
 *Aula sobre operadores logicos 
 */
function compras (trabalho1, trabalho2){
    //operador logico ou (||) se uma das condições for true comprarSorvete vira true tambem
    const comprarSorvete = trabalho1 || trabalho2
    //operador logico e (&&) se uma das condições for false comprarTv50 vira false
    //ambas precisam ser verdadeiras
    const comprarTv50 = trabalho1 && trabalho2
    //bitwise xor
    const comprarTv42 =!! (trabalho1 ^ trabalho2) 
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarSorvete, comprarTv50, comprarTv42, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))