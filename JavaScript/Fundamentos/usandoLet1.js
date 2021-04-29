/*
 *Aula sobre Let 
 */
let numero = 1
{
    //A preferencia do let é pegar o menor escopo
    //o valor 2 fica apenas dentro do escopo
    let numero = 2
    console.log('Dentro = ', numero)
}
console.log('Fora = ',numero)