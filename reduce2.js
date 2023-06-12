const alunos = [
    { nome: 'ana', nota: 9.0, bolsista: true},
    { nome: 'paulo', nota: 5.0, bolsista: true},
    {nome: 'joao', nota: 6.0, bolsista: true},
    { nome: 'maria', nota: 7.0, bolsista: false},
    { nome: 'jonas', nota: 9.0, bolsista: false}
];


// desafio 1 Verificar se todos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista

console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))
// desafio 2 Algum aluno é bolsistas? 

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista)) 

