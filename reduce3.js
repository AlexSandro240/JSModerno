Array.prototype.meuReduce = function (callback) {
    let acumulador = this [0]

    for(let i = 1; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this)       
 }
 


 return acumulador;
}


const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.meuReduce(soma))


var numeros = [0, 1, 2, 3, 4, 5, 6];
var total = numeros.reduce((acumulador, numero, indice, original) => {
console.info(`${acumulador} total até o momento`);
console.log(`${numero} valor atual`);
console.log(`${indice} indice atual`);
console.log(`${original} array original`);
return acumulador += numero;
})
console.warn('acaboooou');
console.log(total)
