Array.prototype.meuFilter = function (callback) {
    const filterArr = [];

    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            filterArr.push(this[i]);
    }

    return filterArr; 
}

}
const produtos = [
    { nome: 'Notebook', preco: 4000, fragil: true},
    { nome: 'PS5', preco: 4000, fragil: false},
    { nome: 'TV', preco: 3000, fragil: false},
    { nome: 'Geladeira', preco: 3000, fragil: false}
]


const caro = produto => produto.preco >= 500 //criei uma função que verificará se o preço do produto é maior ou igual a 500. Caso true, irá retornar os produtos da array produto no console

const fragil = produto => produto.fragil //criei uma função que verificará se o produto é fragil ou não. Caso true, irá retornar os produtos com fragilidade true da array produto no console.

resultado = produtos.meuFilter(caro).meuFilter(fragil);
console.log(resultado);