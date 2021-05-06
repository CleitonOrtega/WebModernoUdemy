/*
 *Aula sobre arrow function 2
 */
//this no arrow function não varia
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa