programa
{
    funcao inicio()
    {
        real num1, num2, num3, media

        // Solicita os números ao usuário
        escreva("Digite o primeiro número: ")
        leia(num1)

        escreva("Digite o segundo número: ")
        leia(num2)

        escreva("Digite o terceiro número: ")
        leia(num3)

        // Calcula a média
        media = (num1 + num2 + num3) / 3

        // Exibe a média
        escreva("A média é: ", media, "\n")

        // Verifica se a média está entre 6 e 10
        se (media > 6 e media < 10)
        {
            escreva("A média está entre 6 e 10.\n")
        }
        senao
        {
            escreva("A média não está entre 6 e 10.\n")
        }
    }
}