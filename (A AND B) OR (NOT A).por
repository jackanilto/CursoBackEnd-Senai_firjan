programa
{
    funcao inicio()
    {
        escreva("Tabela-Verdade da expressao (A AND B) OR (NOT A)\n\n")
        escreva(" A | B | Resultado\n")
        escreva("-------------------\n")

        para (inteiro A = 0; A <= 1; A++)
        {
            para (inteiro B = 0; B <= 1; B++)
            {
                logico X = (A == 1) e (B == 1)     // A AND B
                logico Y = (A == 0)                // NOT A
                logico Resultado = X ou Y          // (A AND B) OR (NOT A)

                escreva(" ", A, " | ", B, " | ", Resultado, "\n")
            }
        }
    }
}