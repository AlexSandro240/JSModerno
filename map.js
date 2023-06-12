const n = [1, 2 ,3 ,4, 5]

const soma = elemento  => elemento +10 

const multiplica = elemento => elemento * 3

const converteGrana = elemento => `R$ ${parseFloat(elemento).toFixed(2).replace('.', ',')}`

let resultado = n.map(soma).map(multiplica).map(converteGrana)

console.log(resultado);

