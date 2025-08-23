// Notas
let nota1 = 80;
let nota2 = 50;
let nota3 = 90;

// Calculo da média do aluno
let media = (nota1 + nota2 + nota3) / 3;

// Exibir média
console.log("A média do aluno é: " + media); // .toFixed(2) Para limitar a 2 casas decimais

// Verifica se aprovado ou reprovado
if (media >= 7) {
  console.log("Aluno APROVADO!");
} else {
  console.log("Aluno REPROVADO!");
}