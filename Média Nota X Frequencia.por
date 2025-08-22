programa
{
    funcao inicio()
    {
        real media
        inteiro frequencia

        // Solicita as informações ao usuário
        escreva("Digite a média do aluno: ")
        leia(media)

        escreva("Digite a frequência do aluno (em %): ")
        leia(frequencia)

        // Verifica a situação do aluno
        se (media >= 7 e frequencia >= 75)
        {
            escreva("Aluno APROVADO\n")
        }
        senao se (media >= 5 ou frequencia < 75)
        {
            escreva("Aluno em RECUPERAÇÃO\n")
        }
        senao
        {
            escreva("Aluno REPROVADO\n")
        }
    }
}