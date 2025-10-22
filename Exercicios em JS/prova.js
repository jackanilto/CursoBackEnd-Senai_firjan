/*
Crie uma classe chamada ContaBancaria com os atributos titular, saldo e ativa.
Implemente um método sacar(valor) que só permita o saque se a conta 
estiver ativa e houver saldo suficiente.
Caso contrário, mostre uma mensagem de erro adequada no console.
Crie um objeto dessa classe, realize dois saques (um válido e outro inválido) 
e exiba os resultados.
*/

class ContaBancaria {
    constructor(titular, saldo, ativa) {
        this.titular = titular;
        this.saldo = saldo;
        this.ativa = ativa;
    }

    sacar(valor) {
        if (this.ativa && this.saldo >= valor) {
            console.log(`pode sacar`)
        }else{
            console.log(`não pode sacar`)
        }

        if (valor > this.saldo) {
            console.log(`Saldo insuficiente. Saldo atual: R$ ${this.saldo.toFixed(2)}`);
            return;
        }

    }
}

const newConta = new ContaBancaria('Janilto', 5050000, false)

newConta.sacar(1000);
newConta.sacar(6000000);