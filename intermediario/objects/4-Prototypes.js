// function Pessoa(nome, preco) {
//   this.nome = nome;
//   this.preco = preco;
// }

// Pessoa.prototype.nomeCompleto = () => this.nome + " " + this.sobrenome; //Melhora desempenho pois nao é criado uma nvoa funcao a cada Pessoa

// const p1 = new Pessoa("Ana", "Luiza");
// const p2 = new Pessoa("Joao", "Carlos");

// const objA = {
//   chaveA: "A",
// };

// const objB = {
//   chaveB: "B",
// };
// Object.setPrototypeOf(objB, objA); //Seta o pai protoype como sendo o objA mas o pai maior ainda é __prototype__, da para reutilizar outros codigos

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const produto1 = new Produto("Camiseta", 50);
const produto2 = { nome: "Caneca", preco: 25 };
Object.setPrototypeOf(produto2, Produto.prototype);

produto1.aumento(100);
produto2.aumento(100);
console.log(produto1);
console.log(produto2);

const produto3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 45,
  },
  tamanho: { writable: true, configurable: true, enumerable: true, value: 42 },
});

produto3.aumento(100);
console.log(produto3);
