class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

const newProduct1 = new Product('Produto', '10.00')

console.log(`O ${newProduct1.name} custa R$${newProduct1.price}`)


console.clear()

class Animal {
    constructor(specie){
        this.specie = specie
    }
    makeSound(){
        console.log('Algum som')
    }
}
const newAnimal1 = new Animal ('Cachorro')
console.log(newAnimal1.specie)
