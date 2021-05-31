/*
Escreva uma função que receba um valor booleano
ou numérico. Se o parâmetro fornecido for booleano,
o retorno da função deverá ser o inverso. Por exemplo,
se a entrada for false, retornará true. Se o parâmetro
for numérico, o retorno será o número inverso. Por
exemplo, se for fornecido 1, o retorno será -1. Se
o parâmetro de entrada não for de nenhum dos tipo
acima, retorne "booleano ou número esperados, mas
o parâmetro é do tipo ...". 
*/

const booleanoOuNumero = (parametroInformado) =>{
    if(typeof parametroInformado != "number" && typeof parametroInformado != "boolean"){
        return `Booleano ou número esperados, mas o parâmetro é do tipo ${typeof parametroInformado}`
    }else if(typeof parametroInformado == "number"){
        return `O Numero digitado é ${parametroInformado} e o contrario dele é ${-parametroInformado}`
    }else{
        return `O valor Booleano digitado é ${parametroInformado} e o contrario dele é ${!parametroInformado}`
    }
}

console.log(booleanoOuNumero(true))
console.log(booleanoOuNumero("6"))
console.log(booleanoOuNumero(-2000))
console.log(booleanoOuNumero("Programação"))