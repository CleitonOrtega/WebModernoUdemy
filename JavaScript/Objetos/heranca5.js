/*
 *Aula sobre Herança 5 
 */

console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['A','B','C'].first())

String.prototype.toString = function() {
    return 'Não fazer isso!, mexe em todo o toString do JS!!!'
}

console.log('Escola cod3r'.reverse())
