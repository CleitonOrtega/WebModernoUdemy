/*
Construa uma função que receba como parâmetros
as alturas e as taxas de crescimento anuais de
duas crianças e calcule se existe uma criança
menor, caso exista se a criança menor ultrapassará
a maior e em quantos anos isso acontecerá. Utilize
centímetros para as unidades de medida.
*/

function calculoCrescimento(altura1, taxaCresc1, altura2, taxaCresc2){
    if(altura1 == altura2){
        if(taxaCresc1 > taxaCresc1){
            console.log("A primeira criança vai passar a segunda criança em 1 ano!")
        }else if(taxaCresc1 < taxaCresc1){
            console.log("A segunda criança vai passar a primeira criança em 1 ano!")
        }else{
            console.log("As duas tem a mesma altura e mesma taxa de crescimento!")
        }
    }else{
        if(altura1 > altura2){
            if(taxaCresc1 >= taxaCresc2){
                console.log("A criança menor não ira passar a criança maior!")
            }else{
                console.log(calcularTempo(altura2, taxaCresc2, altura1, taxaCresc1))
            }
        }else{
            if(taxaCresc2 >= taxaCresc1){
                console.log("A criança menor não ira passar a criança maior!")
            }else{
                console.log(calcularTempo(altura1, taxaCresc1, altura2, taxaCresc2))
            }
        }
    }
}

function calcularTempo(menorAltura, taxaMenorAltura, maiorAltura, taxaMaiorAltura){
    let anosPassados = 0
    while (menorAltura < maiorAltura) {
        menorAltura += taxaMenorAltura
        maiorAltura += taxaMaiorAltura
        anosPassados++
    }
    console.log(anosPassados)
    return anosPassados
}

calculoCrescimento(150, 2, 130, 4)