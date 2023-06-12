//Destrucyting

const pessoa = {
    nome: 'Alex',
    idade: 30,
    endereco: { 
        logradouro: 'rua bonita', 
        numero: 123
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const{nome: bunda, idade: penis} = pessoa;
console.log(bunda, penis);

const {endereco} = pessoa;
console.log(endereco);

const{endereco: {logradouro,numero}} = pessoa; 
console.log(logradouro, numero);

// const a = [10, 12, 13, 14, 15]
// console.log(a);


// const [n1, n2, n3, n4, n5] = [10, 12, 13, 14, 15]
// console.log(n1, n2, n3, n4, n5);

//Destruction Array

const [a, b, c, d, e, f, g, h, i] = [10, 2, 3, 4, 5 ,'a','b','c','d']
console.log(e);

const p1 = [1, 2, 3, 4, 5, 'pont', 7, 8, 9];
console.log(p1);
console.log(p1.length);
console.log(p1[5])


const [n1, n2, n3] = [1, 2 ,3];
console.log(n1, n2);

//Destructuring Function

function rand({max = 0, min =1000}) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
    
}

const obj = {min: 0, max: 1000};
console.log(rand(obj));
