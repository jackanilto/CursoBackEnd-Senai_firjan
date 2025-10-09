class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const newProduct1 = new Product('Produto', '10.00')

console.log(`O ${newProduct1.name} custa R$${newProduct1.price}`)



class Animal {
    constructor(specie) {
        this.specie = specie
    }
    
    makeSound() {
        console.log('Algum som')
    }
}

const animalGenerico = new Animal('Animal')
console.log(animalGenerico.specie)
animalGenerico.makeSound()

class Dog extends Animal {
    constructor(race, weight, size) {
        super('Cachorro')
        this.race = race
        this.weight = weight
        this.size = size
    }
    
    // polimorfismo
    makeSound() {
        console.log('Au Au Au')
    }
}

class Cat extends Animal {
    constructor(race, weight, size) {
        super('Gato')
        this.race = race
        this.weight = weight
        this.size = size
    }
    
    // polimorfismo
    makeSound() {
        console.log('Miau Miau')
    }
}

const dog1 = new Dog('Pastor Alemão', '20.0', 'Grande')
const cat1 = new Cat('Siamês', '5.0', 'Pequeno')

console.log(dog1.specie, dog1.race)
dog1.makeSound()

console.log(cat1.specie, cat1.race)
cat1.makeSound()



console.clear()

// classe Pai Veiculo
// 3 veiculos filhos

// Classe base veículo
class Veiculo {
    constructor(tipo) {
        this.tipo = tipo
    }

    ligar() {
        console.log('O veículo está ligando...')
    }
}

// Subclasse 1
class Carro extends Veiculo {
    constructor(marca, modelo, ano) {
        super('Carro')
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

    // Polimorfismo
    ligar() {
        console.log(`O ${this.marca} ${this.modelo} está dando partida... Vruumm!`)
    }
}
const newCarro = new Carro ('Honda', 'Civic', '2025')
console.log(newCarro)



// Subclasse 2
class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
        super('Moto') // tipo do veiculo
        this.marca = marca
        this.modelo = modelo
        this.cilindrada = cilindrada
    }

    // Polimorfismo
    ligar() {
        console.log(`A ${this.marca} ${this.modelo} está acelerando... Rááá!`)
    }
}
const newMoto = new Moto ('Honda', 'CB300', '300C')
console.log(newMoto)




// Subclasse 3
class Caminhao extends Veiculo {
    constructor(marca, modelo, capacidade) {
        super('Caminhão')
        this.marca = marca
        this.modelo = modelo
        this.capacidade = capacidade
    }

    // Polimorfismo
    ligar() {
        console.log(`O ${this.marca} ${this.modelo} está ligando... Brummm!`)
    }
}
const newCaminhao = new Caminhao ('Volvo', 'FH 540', '25 toneladas')
console.log(newCaminhao)



// Testando as classes
const carro1 = new Carro('Toyota', 'Corolla', 2023)
const moto1 = new Moto('Honda', 'CB 500', '500cc')
const caminhao1 = new Caminhao('Volvo', 'FH 540', '25 toneladas')

console.log(carro1.tipo, carro1.marca, carro1.modelo)
carro1.ligar()

console.log(moto1.tipo, moto1.marca, moto1.modelo)
moto1.ligar()

console.log(caminhao1.tipo, caminhao1.marca, caminhao1.modelo)
caminhao1.ligar()


console.clear()



class User {
    #name
    #email
    #password

    constructor(name, email, password) {
        this.#name = name
        this.#email = email
        this.#password = password
    }

    get name() {
        return this.#name
    }

    set name(newName) {
        if (newName.length <= 3) {
            console.log('O nome deve ter mais de 3 caracteres')
        } else {
            this.#name = newName
        }
    }

    get email() {
        return this.#email
    }

    set email(newEmail) {
        this.#email = newEmail
    }

    get password() {
        return 'Acesso negado'
    }

    set password(newPassword) {
        if (newPassword.length < 6) {
            console.log('A senha deve ter pelo menos 6 caracteres')
        } else {
            this.#password = newPassword
        }
    }
}
