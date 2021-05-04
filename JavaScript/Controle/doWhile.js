/*
 *Aula sobre estrutura de repetição do while
 */
 function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do{ 
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi: ${opcao}.`)

    if(opcao === -1){
        console.log("Até a proxima!")
    }
}while(opcao != -1)