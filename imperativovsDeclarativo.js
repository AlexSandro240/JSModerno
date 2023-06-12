const alunos = [
    {nome: 'jão', nota: 2.0},
    {nome: 'maria', nota: 2.0},
    {nome: 'cu', nota: 2.0},
    {nome: 'cao', nota: 2.0}
]



const soma = (total, atual) => total + atual;
const pegaNota = aluno => aluno.nota;
const total = alunos.map(pegaNota).reduce(soma);
console.log(alunos.length)
console.log(total/alunos.length);