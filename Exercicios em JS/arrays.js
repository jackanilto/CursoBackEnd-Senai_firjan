// Forma menos usual
// let newArray = new Array 

// console.log(newArray)



// Loop for   ===================================================
// const frutas = ['maçã', 'mamão', 'uva']
// const frutasarray = new Array('maçã')

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i])
// }




// ForEach =======================================================
// let frutas = ['maçã', 'banana', 'laranja', 'uva']

// frutas.forEach((fruta, indice) => {
//     console.log(`Fruta ${indice + 1}: ${fruta}`)
// })


// com While =====================================================
// let frutas = ['maçã', 'banana', 'laranja', 'uva']
// let i = 0

// while (i < frutas.length) {
//     console.log(`Fruta ${i + 1}: ${frutas[i]}`)
//     i++ // incrementa o contador para evitar loop infinito
// }



//Usando MAP
// let idades = [10, 15, 20, 25, 30]
// // Cria um novo array com o dobro das idades
// let idadesDobradas = idades.map(idade => idade * 2)

// console.log('Idades originais:', idades)
// console.log('Idades dobradas:', idadesDobradas)


// USANDO FOREACH ================================================
// let idades = [10, 15, 20, 25, 30]
// let idadesDobradas = [] // novo array vazio
// // Percorre o array e adiciona o dobro de cada idade
// idades.forEach(idade => {
//     idadesDobradas.push(idade * 2)
// })

// console.log('Idades originais:', idades)
// console.log('Idades dobradas:', idadesDobradas)




// var alunos = ['ana', 'bruno', 'carla', 'daniel', 'eduarda']

// // Cria um novo array com os nomes em maiúsculas
// var alunosMaiusculos = alunos.map(function(aluno){
//     return alunos.map
// })

// console.log('Nomes originais:', alunos)
// console.log('Nomes em maiúsculas:', alunosMaiusculos)



// Usando Arrow Function =======================================================
var filmes = ['Lagoa Azul', 'Rambo III', 'O Cubo', 'Outro', 'Mais Um']
filmes.forEach(filme => console.log('Eu gosto do filme', filme))


console.clear()

// Exercicio 1 ================================================

let precos = [30, 135, 140, 10.50, 89, 190]


let precosComDesconto = precos.map(preco => {
    if (preco > 100) {
        return (preco * 0.85).toFixed(2) 
    } else {
        return preco.toFixed(2)
    }
})

console.log('Preços Normais:', precos)
console.log('Preços com desconto:', precosComDesconto)


// Exercicio 2 ================================================


var preco = [30, 150, 10.50]
var newPrecos = precos.map(function(preco) {
    if (preco>100){
        return ((preco * 0.85).toFixed(2))
    }else {
        return preco.toFixed(2)
    }
})
console.log('Novos Preços:', newPrecos)


// Array de Objetos - acessando obj dentro do obj ================================================

const arrayObj = [
    { name: 'João', idade: 15},
    { name: 'Leo', idade: 50},
    { name:'Luzimar', idade: 40}
]

console.log(arrayObj[0].idade)




//===========================================================

arrayObj.forEach(function(obj) {
    if (obj.idade >= 18) {
        console.log(`${obj.name} pode dirigir`)
    } else {
        console.log(`${obj.name} não pode dirigir`)
    }
})
// Usando filter  para retornar uma lista  com Arrow Function e sem Arrow Function
const alunosMaioresDeIdadeSemArrow = arrayObj.filter(function(obj){
    return obj.idade > 18
})

const alunosMaioresDeIdadeComArrow = arrayObj.filter(obj => obj.idade <18)


// Lista podem ter tipos diferentes

var typesArray = [true, 2, 3, 14, 'PI']

var fruits = ['maçã', 'mamão', 'orange', 'laranja, limão, abacate']
// Pega o primeiro elemento da lista 
console.log(fruits[0])
// Pega o ultimo elemento da lista 
console.log(fruits[fruits.length -1])

console.log(fruits[fruits.length])





// SORT
console.log(fruits)
console.log(fruits.sort())



console.log(fruits)
fruits.push('grape', 'orange')



console.log(Math.random() * 10)

//Shift

console.log(fruits)
console.log(fruits.pop())
console.log(fruits.shift())
console.log(fruits.shift())
console.log(fruits.shift())
console.log(fruits.shift())
console.log(fruits.unshift('limao','morango'))
console.log(fruits)



//verificar se existe um elemento
console.log(fruits.includes('limão'))

var alunos = ['Antonio', 'João', 'Antonio']
if (alunos.includes('Sebastião')){
    
}

console.log(alunos.includes('Sebastião'))
var novoAluno = 'Amario'
if (novoAluno.includes(novoAluno)){
    console.log('Este Aluno já existe')
}else{
    novoAluno.push(novoAluno)
    console.log('Aluno adiconado com sucesso')
}
console.log(alunos)



// Somar Numeros pares de uma lista
// Dado um array de número, some os numeros pares

let soma = 0;
let N = [1, 2, 3, 44, 55, 76, 47, 8, 9];

for (let i = 0; i < N.length; i++) {
    if (N[i] % 2 == 0) { 
        soma = soma + N[i]; 
    }
}
console.log(soma);



//Verificar um indice de um elemento

console.log(fruits.indexOf('grape'))
console.log(fruits[2])

const result = fruits.find((fruit) => fruit === 'grape')
console.log(result)



//slice - FATIAR -> array.slice(inicio, final)  

let newFruits = fruits.slice(0, 2)
let newFruits2 = fruits.slice(3, 6)
let newFruits3 = fruits.slice(-2)

console.log(fruits)


//contar quantos elementos sao maiores que 20
//Use um loop e condição para contar quantos numeros sao maiores que 20

// let Numeros = [1, 2, 3, 44, 55, 76, 47, 8, 9];

// for (let i = 0; i < 20; i++) {
    //     if (Numeros) { 
        //         soma = soma + N[i]; 
        //     }
        // }
        // console.log(Numeros);
        let Numeros = [1, 2, 3, 44, 55, 76, 47, 8, 9];
        let contar = 0;
        
        for (let i = 0; i < Numeros.length; i++) {
            if (Numeros[i] > 20) {
                contar++;
            }
        }
        
        console.log( contar, "São maiores que 20");
        
        
        /*
        Filtrar pessoas maiores de idade 
        Crie uma função que recebe uma lista de objetos PESSOA  
        com nome e idade , e retorna apenas 
        */
       
       
       
       
       let listaDePessoas = [
           { nome: "Joana", idade: 13 },
           { nome: "Joaquin", idade: 22 },
           { nome: "João", idade: 28 },
           { nome: "Jonas", idade: 14 }
        ];
        
        function filtrarMaioresDeIdade(pessoas) {
            return pessoas.filter(pessoa => pessoa.idade >= 18);
        }
        let resultado = filtrarMaioresDeIdade(listaDePessoas);
        console.log(resultado);
        
        
        
        let Pessoas = [
            { nome: "Joana", idade: 17 },
            { nome: "Joaquin", idade: 26 },
            { nome: "João", idade: 28 },
            { nome: "Jonas", idade: 14 }
        ];

Pessoas.forEach(Pessoas => {
    if (Pessoas.age >=18) {
        console.log(user.nome)
    }
})
console.log(Pessoas)


/* 
Dado umaArray de stryngs, retorne um novo array com os nomes em Letras Maiuscula 
usar .toUpperCse() para string fcar maiuscula
*/ 

const listaNomes = ["emanuel", "joão", "Joana", "maria" ]
const newLitaNomes = listaNomes.map( name => name.toUpperCase())
console.log(newLitaNomes)




// Cria uma lista (array) chamada 'scoreList' com 3 notas
const scoreList = [9, 5, 3]

// Declara a função 'checkScore' que recebe uma lista de números como parâmetro
function checkScore(list){
    // Cria uma variável 'soma' para armazenar a soma das notas, começando em 0
    let soma = 0
    
    // Percorre cada elemento da lista com 'forEach'
    // Para cada 'score' (nota), soma ao valor atual de 'soma'
    list.forEach(score => soma = soma + score)
    
    // Calcula a média dividindo a soma pelo tamanho da lista
    // Se a média for maior ou igual a 6, retorna "Aprovado"
    // Caso contrário, retorna "Reprovado"
    return (soma / list.length) >= 6 ? 'Aprovado' : 'Reprovado'
}

// Chama a função 'checkScore' passando 'scoreList' e imprime o resultado no console
console.log(checkScore(scoreList))


/*
Sistema de cadastro de Alunos
Descriçao : Crie uam classe Aluno com os atributosNome, Ideade e notas (Lista de Numeros).
Adicione metodos para :
Calcular Media 
Verificar se o aluno está aprovado (media 7)

*/

class Aluno {
    // O construtor é chamado quando criamos um novo Aluno
    constructor(nome, idade, notas) {
        this.nome = nome;  
        this.idade = idade; 
        this.notas = notas; 
    }
    
    calcularMedia() {
        let soma = 0;
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i];
        }
        return (soma / this.notas.length).toFixed(2);
    }
    verificarAprovacao() {
        const media = this.calcularMedia();
        return media >= 7 ? 'Aprovado' : 'Reprovado';
    }
}
const aluno1 = new Aluno('Ana', 17, [8, 9, 7]);
const aluno2 = new Aluno('Carlos', 18, [5, 6, 6]);
const aluno3 = new Aluno('Carla', 14, [2, 8, 7]);
const aluno4 = new Aluno('Gilberto', 14, [2, 8, 7]);

console.log(`Aluno: ${aluno1.nome}`);
console.log(`Média: ${aluno1.calcularMedia()}`);
console.log(`Situação: ${aluno1.verificarAprovacao()}`);

console.log('------------------------');

console.log(`Aluno: ${aluno2.nome}`);
console.log(`Média: ${aluno2.calcularMedia()}`);
console.log(`Situação: ${aluno2.verificarAprovacao()}`);
console.log('------------------------');

console.log(`Aluno: ${aluno3.nome}`);
console.log(`Média: ${aluno3.calcularMedia()}`);
console.log(`Situação: ${aluno3.verificarAprovacao()}`);


console.clear()


/*
crie uma classe  Tarefa com titulo. descrição , hora e data adicionada 
e status (pendente ou concluida)  faça um programa 
que permita adicionar tarefas marcar como concluida e listar todas 
*/

class Tarefas {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date();  // parênteses para criar o objeto Date atual
        this.status = 'Pendente'; 
    }
    taskConcluida() {
        this.status = 'Concluída';
    }
}

const newTask = new Tarefas('Estudar JS', 'Estudar Muito');
console.log(newTask);

console.log('Antes:', newTask);

newTask.taskConcluida();

console.log('Depois:', newTask);
