/*
 *Aula sobre callback 2 JS 
 */
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem o callback
let notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//Com o callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

//Com o callback e arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//Com o callback e arrow function diferente
const funcaoArrow = nota => nota < 7
const notasBaixas4 = notas.filter(funcaoArrow)
console.log(notasBaixas4)