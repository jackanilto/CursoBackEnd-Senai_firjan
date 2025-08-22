programa
{
    funcao inicio()
    {
        inteiro numero

        escreva("Digite um número: ")
        leia(numero)

        // Verifica se o número é positivo ou negativo
        se (numero >= 0) // -1 ou abaixo dele nesse caso para negitvo 
        {
            escreva("Positivo\n")
        }
        senao
        {
            escreva("Negativo\n")
        }
    }
}