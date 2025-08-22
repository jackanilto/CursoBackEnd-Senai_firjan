programa
{
    funcao inicio()
    {
        real nota1, nota2, nota3, media

        escreva("Digite a primeira nota: ")
        leia(nota1)

        escreva("Digite a segunda nota: ")
        leia(nota2)

        escreva("Digite a terceira nota: ")
        leia(nota3)

        media = (nota1 + nota2 + nota3) / 3

        escreva("A média do aluno é: ", media, "\n")

        se (media >= 7)
        {
            escreva("Aluno APROVADO!\n")
        }
        senao
        {
            escreva("Aluno REPROVADO!\n")
        }
    }
}