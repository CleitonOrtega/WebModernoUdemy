/*
 *Aula sobre Var 
 */
{ 
    { 
        { 
            { 
                {
                    var sera = 'Sera??'
                }
            }
        }
    }
}
//Var é visivel mesmo fora do bloco onde foi criada, o scopo dela é global!!!
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
//A var local daria erro pois ela foi definida apenas dentro da função!!!
//console.log(local)