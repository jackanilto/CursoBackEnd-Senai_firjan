programa
{
    funcao inicio()
    {
        real raio, area
        real pi = 3.14159  // Valor aproximado de π

        // Solicita ao usuário o raio do círculo
        escreva("Digite o raio do círculo: ")
        leia(raio)

        // Calcula a área do círculo
        area = pi * raio * raio

        // Exibe o resultado
        escreva("A área do círculo com raio ", raio, " é: ", area, "\n")
    }
}