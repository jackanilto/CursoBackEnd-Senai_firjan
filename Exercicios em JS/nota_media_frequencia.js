// programa
// {
//     funcao inicio()
//     {
//         real media
//         inteiro frequencia

//         // Solicita as informações ao usuário
//         escreva("Digite a média do aluno: ")
//         leia(media)

//         escreva("Digite a frequência do aluno (em %): ")
//         leia(frequencia)

//         // Verifica a situação do aluno
//         se (media >= 7 e frequencia >= 75)
//         {
//             escreva("Aluno APROVADO\n")
//         }
//         senao se (media >= 5 ou frequencia < 75)
//         {
//             escreva("Aluno em RECUPERAÇÃO\n")
//         }
//         senao
//         {
//             escreva("Aluno REPROVADO\n")
//         }
//     }
// }

// Notas do aluno
let nota1 = 80;
let nota2 = 50;
let nota3 = 90;

// Frequência do aluno (em %)
let frequencia = 70;

// Cálculo da média
let media = (nota1 + nota2 + nota3) / 3;

// Exibir resultados
console.log("Média do aluno: " + media.toFixed(2));
console.log("Frequência: " + frequencia + "%");

// Verificar situação
if (media >= 7 && frequencia >= 75) {
  console.log("✅ Aluno APROVADO!");
} else if (media >= 5 || frequencia < 75) {
  console.log("⚠️ Aluno em RECUPERAÇÃO!");
} else {
  console.log("❌ Aluno REPROVADO!");
}