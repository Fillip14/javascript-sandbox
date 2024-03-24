//Camiseta, caneca
//Aumento, desconto, cor, material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); //Ele herda todas os parametros da funcao pai, inclusive prototypes
  this.cor = cor;
}

Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
}; //Ele modifica o aumento para ser espeifico a camiseta, ele seria superior na herança

Camiseta.prototype = Object.create(Produto.prototype); //Cria o prototype de acordo com a funcao pai
Camiseta.prototype.constructor = Camiseta; //Seta o constructor como sendo o da sua funcao

const camiseta = new Camiseta("Regata", 70, "Preta");
// camiseta.aumento(10);
console.log(camiseta);

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  this.estoque = this.estoque;

  Object.defineProperty(this, "estoque", {
    enumerable: true,
    configurable: false,
    get: () => estoque,
    set: (valor) => {
      if (typeof valor !== "number") return;
      estoque = valor;
    },
  });
}
Caneca.prototype = Object.create(Produto.prototype); //Cria o prototype de acordo com a funcao pai
Caneca.prototype.constructor = Caneca; //Seta o constructor como sendo o da sua funcao

const caneca = new Caneca("Caneca", 13, "Plastico", 5);
