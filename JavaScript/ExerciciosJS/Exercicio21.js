/*
Criar um programa para identificar o valor a
ser pago por um plano de saúde dada a idade
do conveniado considerando que todos pagam
R$ 100 mais um adicional conforme a seguinte
tabela: 1) crianças com menos de 10 anos pagam
R$80; 2) conveniados com idade entre 10 e 30
anos pagam R$50; 3) conveniados com idade acima
de 30 e até 60 anos pagam R$ 95; e 4) conveniados
acima de 60 anos pagam R$130
*/

const valorConveniado = (idade) => {
    let categ = categoriaConveniado(idade)

    switch(categ){
        case 'A':
            return `Idade invalida!`
        case 'B':
            return `O valor é R$180`
        case 'C':
            return `O valor é R$150`
        case 'D':
            return `O valor é R$195`
        case 'E':
            return `O valor é R$230`
        default:
            return "Opção invalida!"
    }
}

const categoriaConveniado = (idade) =>{
    if(idade < 0){
        return 'A'
    }else if(idade < 11){
        return 'B'
    }else if(idade < 31){
        return 'C'
    }else if(idade < 61){
        return 'D'
    }else{
        return 'E'
    }
}

console.log(valorConveniado(-1))
console.log(valorConveniado(1))
console.log(valorConveniado(12))
console.log(valorConveniado(32))
console.log(valorConveniado(62))