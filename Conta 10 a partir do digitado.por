programa
{
    // Programa que lê um número e conta até 10 a partir dele

    funcao inicio()
    {
        inteiro numero
        inteiro contador

        escreva("Digite um número: ")
        leia(numero)

        // Contar até 10 a partir do número digitado
        para(contador = numero; contador <= numero + 10; contador++)
        {
            escreva(contador, "\n")
        }
    }
}