/*
 *Aula com array 
 */

 //Declarando a array com [] e colocando alguns valores dentro dela
const valores = [7.7, 8.9, 6.3, 9.2]


//Mostrando a array nas posições 0 e 3 passadas no parametro "[]"
console.log(valores[0], valores[3])
//Mostrando uma posição que não tem valor algum onde ele retorna
//undefined
console.log(valores[4])

//Mostrando o tamanho da array
console.log(valores.length)

//Acrescentando dados de diversos tipos na array (NÃO É UMA BOA PRATICA!) 
valores.push({id:3},false,null,'teste')
console.log(valores)

//Colocando um dado em uma posição especifica da array porém com um espaçamento
//de dados onde faltam dados entre a posição 10 e onde o ultimo dado foi colocado
valores[10] = 10
//Mostrando o espaço vazio na array onde ele ira retornar "<2 empty items>" 
//mostrando 2 itens vazios
console.log(valores)
//Função para tirar o ultimo dado da array
console.log(valores.pop())
console.log(valores)

//Também deleta o dado da array porém desta vez passamos a pósição do array 
//que queremos deletar
delete valores[0]
console.log(valores)

//Vemos que uma array é um objeto
console.log(typeof valores)