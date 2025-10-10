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

var fruits = ['maçã', 'mamão', 'orange', 'laranja']
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

console.clear()
var alunos = ['Antonio', 'João', 'Antonio']
if (alunos.includes('Sebastião')){

}

console.log(alunos.includes('Sebastião'))
var novoAluno = 'Ana'
if (novoAluno.includes(novoAluno)){
    console.log('Este Aluno já existe')
}else{
    novoAluno.push(novoAluno)
    console.log('Aluno adiconado com sucesso')
}
console.log(alunos)