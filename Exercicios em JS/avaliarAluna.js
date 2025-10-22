/*
Crie uma função chamada avaliarAluno que receba um objeto 
com as propriedades nome e nota.
Se a nota for maior ou igual a 7, exiba ${nome} foi aprovado.
Caso contrário, exiba ${nome} foi reprovado.
Teste a função com pelo menos três alunos diferentes, 
armazenados em uma lista de objetos e percorra essa lista com um loop chamando a função para cada aluno.
*/

function avaliarAluno(aluno) {
    if (aluno.nota >= 7) {
        console.log(`${aluno.nome} foi aprovado.`);
    } else {
        console.log(`${aluno.nome} foi reprovado.`);
    }
}

const alunos = [
    { nome: 'Janilto', nota: 9 },
    { nome: 'Maria', nota: 6 },
    { nome: 'Carlos', nota: 7 }
];

for (let i = 0; i < alunos.length; i++) {
    avaliarAluno(alunos[i]);
}