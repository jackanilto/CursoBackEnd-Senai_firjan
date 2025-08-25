
// programa
// {
//     funcao inicio()
//     {
//         real numero1, numero2, soma, subtracao, multiplicacao, divisao
//         // Solicita os dois números ao usuário
//         escreva("Digite o primeiro número: ")
//         leia(numero1)

//         escreva("Digite o segundo número: ")
//         leia(numero2)
//         // Calcula as operações
//         soma = numero1 + numero2
//         subtracao = numero1 - numero2
//         multiplicacao = numero1 * numero2
//         // Verifica se o segundo número é diferente de zero para evitar divisão por zero
//         se (numero2 != 0)
//         {
//             divisao = numero1 / numero2
//         }
//         senao
//         {
//             divisao = 0
//             escreva("Não é possível dividir por zero.\n")
//         }
//         // Exibe os resultados
//         escreva("Soma: ", soma, "\n")
//         escreva("Subtração: ", subtracao, "\n")
//         escreva("Multiplicação: ", multiplicacao, "\n")
        
//         se (numero2 != 0)
//         {
//             escreva("Divisão: ", divisao, "\n")
//         }
//     }
// }
numero1 = 10;
numero2 = 5;
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao;
if (numero2 !== 0) {
    divisao = numero1 / numero2;
}
else {
    divisao = "Divisão por zero não é permitida.";
}
console.log("Soma: " + soma);
console.log("Subtração: " + subtracao);
console.log("Multiplicação: " + multiplicacao);
if (typeof divisao === "number") {
    console.log("Divisão: " + divisao);
}
else {
    console.log(divisao);
}

