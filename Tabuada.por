programa
{
    funcao inicio()
    {
        // Declaração das variáveis NO CASO INTEIRO que serao as variáveis NUMERO e i
        // 'numero' armazenará o número escolhido pelo usuário
        // 'i' será usado como contador no loop por exemplo X 1, X 2, X 3
        inteiro numero, i

        // Solicita ao usuário que digite um número
        escreva("Digite um número para ver a tabuada: ")
        leia(numero)  // Lê o número digitado pelo usuário e armazena na variável 'numero'

        // Exibe uma mensagem indicando de qual número será a tabuada
        escreva("Tabuada do ", numero, ":\n")

        // Loop para calcular a tabuada de 1 a 10
        para (i = 1; i <= 10; i++)  // Começa em i=1, vai até i=10, incrementando 1 a cada passo - nesse caso é um loop de repetiçao
        {
            // Mostra o resultado da multiplicação do número pelo contador
          // Exemplo: 5       x     1   =       5 no caso isso se repete ate o 10
            escreva(numero, " x ", i, " = ", numero * i, "\n")
        }

        // O loop termina automaticamente quando i > 10
        // E o programa encerra a função inicio()
    }
}