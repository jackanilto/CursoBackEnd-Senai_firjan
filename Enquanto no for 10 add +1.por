programa
{
    funcao inicio()
    {
        inteiro numero

        escreva("Digite um número: ")
        leia(numero)

        // Enquanto o número for menor que 10, adicionar 1
        enquanto (numero < 10)
        {
            numero = numero + 1
            escreva("Número agora: ", numero, "\n")
        }
    }
}