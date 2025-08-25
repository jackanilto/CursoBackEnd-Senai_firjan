// programa
// {
//     funcao inicio()
//     {
//         inteiro numero

//         // Laço que continua até o usuário digitar 0
//         enquanto (verdadeiro)
//         {
//             escreva("Digite um número (ou 0 para sair): ")
//             leia(numero)

//             // Se for 0, sai do loop
//             se (numero == 0)
//             {
//                 escreva("Programa encerrado.\n")
//                 pare
//             }

//             // Verifica se é par ou ímpar
//             se (numero % 2 == 0)
//             {
//                 escreva("O número ", numero, " é PAR.\n")
//             }
//             senao
//             {
//                 escreva("O número ", numero, " é ÍMPAR.\n")
//             }
//         }
//     }
// }

numero = 4;
if (numero % 2 == 0) { // Verifica se o número é par
    console.log("O número " + numero + " é PAR.");    // Se o resto da divisão por 2 for 0, é par
}
else {
    console.log("O número " + numero + " é ÍMPAR.");  // Se não, é ímpar
}