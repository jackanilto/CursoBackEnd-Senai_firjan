programa
{
    funcao inicio()
    {
        inteiro opcao

        escreva("Digite uma opcao (1 ou 2): ")
        leia(opcao)

        escolha (opcao)
        {
            caso 1:
                escreva("Opcao 1 escolhida\n")
                pare
            caso 2:
                escreva("Opcao 2 escolhida\n")
                pare
            caso contrario:
                escreva("Escolha uma opção válida (1 ou 2): ")
                leia(opcao)
        }
    }
}