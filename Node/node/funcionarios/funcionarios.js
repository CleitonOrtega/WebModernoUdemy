const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

function mulherEChinesa(func){
   return func.genero == 'F' && func.pais == 'China'
}

function menorSalario(funcionario, funcionarioAtual){
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    var mulherChinesa = funcionarios.filter(mulherEChinesa).reduce(menorSalario)
    
    console.log(mulherChinesa)
})


