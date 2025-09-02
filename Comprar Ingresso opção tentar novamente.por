programa
{
  funcao inicio()
  {
      real valor
      inteiro hora, minuto, opcao

      opcao <- 1  // controla o loop: 1 continua, 0 sai

      enquanto (opcao != 0) {
          escreva("Exercício 20 - É possível assistir o filme?\n\n")
          escreva("============ Cinema Estudonauta ===========\n")
          escreva("Horário do filme: 14h - Preço do ingresso: R$20,00\n")
          escreva("--------------------------------------------------\n")

          escreva("Quanto dinheiro você tem? R$")
          leia(valor)

          escreva("Informe a hora atual: ")
          leia(hora)

          escreva("Informe os minutos atuais: ")
          leia(minuto)

          // Mantive sua regra original (apenas exemplificando)
          se (hora <= 14 e minuto < 1 e valor >= 20) {
              escreva("Agora são ", hora, ":", minuto, ". Você consegue comprar o ingresso!")
          } senao {
              escreva("Agora são ", hora, ":", minuto, ". Infelizmente não é possível comprar os ingressos!")
          }

          escreva("\n\nDigite 1 para tentar novamente ou 0 para sair: ")
          leia(opcao)

          escreva("\n----------------------------------------------\n\n")
      }

      escreva("Programa encerrado. Até logo!")
  }
}