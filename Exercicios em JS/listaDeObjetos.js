/*
Crie uma classe Loja que armazene uma lista de objetos produtos (nome e preço).
Implemente um método listarCaros() que percorra os produtos e exiba apenas os 
que custam mais de R$ 100.
Adicione pelo menos 3 produtos à lista dentro da classe (pode ser no construtor).
Por fim, instancie a classe e chame o método listarCaros().
*/

class Loja {
    constructor() {
        this.produtos = [
            { nome: 'Gol', preco: 80 },
            { nome: 'Tigor', preco: 150 },
            { nome: 'Kombi', preco: 400 }
        ];
    }

    listarCaros() {
        console.log("Produtos com preço acima de R$ 100:");
        this.produtos.forEach(produto => {
            if (produto.preco > 100) {
                console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
            }
        });
    }
}

const loja = new Loja();
loja.listarCaros();


console.clear()

class Loja {
    constructor(productList) {
        this.productList = productList;
    }

    listarCaros() {
        console.log("Produtos com preço acima de R$ 100:");

        for (let i = 0; i < this.productList.length; i++) {
            let produto = this.productList[i];
            if (produto.preco > 100) {
                console.log(`${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
            }
        }
    }
}

let listarCaros = [
    { nome: 'Gol', preco: 80 },
    { nome: 'Tigor', preco: 150 },
    { nome: 'Kombi', preco: 400 }
];

const newLoja = new Loja(listarCaros);

newLoja.listarCaros();