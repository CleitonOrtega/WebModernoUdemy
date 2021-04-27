/*
Em JS temos tipos diferentes de retorno como por exemplo 
Infinity que é um numero infinito 
Podemos usar numeros entre aspás como disse na classe numeros
Temos um NaN (Not a Number)
E temos um padrão de matematica que precisa ser alguns numeros
especificos para retornar um valor certo mesmo como por
exemplo o 0.1 + 0.7 era para retornar um 0.8 porém por 
conta de ser um numero mais especifico retornou um 0.7999...
e para usar um toString ou algum metodo em um numero precisamos
usar parenteses no numero em questão se não causa um erro assim
como esta no código comentado o 10, naquela linha retorna um erro
ja nas linhas do 10.345 ambas retorna o valor normal
Observação o toFixed caso o ultimo numero das casas decimais
seja igual ou maior que 5 ele arredonda pra cima como mostrei
nas 2 ultimas linhas de código
*/
console.log(7 / 0)
console.log('10' / 2)
console.log('10' + 2)
console.log('10' - 2)
console.log('Show!' * 2)
console.log(0.1 + 0.7)
//console.log(10.toString())
console.log((10.345).toString())
console.log((10.344).toFixed(2))
console.log((10.345).toFixed(2))