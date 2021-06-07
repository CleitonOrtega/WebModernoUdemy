/*
 *Aula sobre como acessar modulos 
 */
//Aceita sem o camelCase porém os servidores que são de linux não irão reconhecer
const moduloA = require('../../Moduloa')
console.log(moduloA.ola)

//importou o saudacao e usou o arquivo index.js se não tiver ele da erro!!!
const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pastaC/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) =>{
    res.write('Bom dia!')
    res.end()
}).listen(8080)