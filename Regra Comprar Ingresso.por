programa
{
  inclua biblioteca Util 
    funcao inicio()
    {
        real valor
        inteiro hora, minuto

        escreva("{Exercício 20 - É possível assistir o filme?}\n\n")
        escreva("{============ Cinema Estudonauta ===========}\n")
        escreva("Horário do filme: 14h - Preço do ingresso: R$20,00\n")
        escreva("--------------------------------------------------\n")

        escreva("Quanto dinheiro você tem? R$")
        leia(valor)

        escreva("Informe a hora atual: ")
        leia(hora)

        escreva("Informe os minutos atuais: ")
        leia(minuto)

        se(hora <= 14 e minuto < 1 e valor >=20 ){
            escreva("Agora são "+hora+":"+minuto+".Você consegue comprar o ingresso!")  
            // Para comprar o ingresso precisa ser hora 14 e minuto 0 ex: 14:00
        }senao{
            escreva("Agora são "+hora+":"+minuto+". Infelizmente não é possível comprar os ingresso !")
        }
    }
}