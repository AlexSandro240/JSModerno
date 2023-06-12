const alunos = [
    { nome: 'ana', nota: 9.0, bolsista: true},
    { nome: 'paulo', nota: 5.0, bolsista: true},
    {nome: 'joao', nota: 6.0, bolsista: true},
    { nome: 'maria', nota: 7.0, bolsista: false},
    { nome: 'jonas', nota: 9.0, bolsista: false}
];


const result = alunos.map( a => a.nota).reduce(function (acumulador, atual){
        console.log(acumulador, atual);

        return acumulador + atual; 
} )

