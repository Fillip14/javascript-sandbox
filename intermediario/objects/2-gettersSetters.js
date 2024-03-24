function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra chave
    configurable: true, //nao permite apagar chave, reconfigurar

    get: () => {
      return estoque;
    }, //Quando é pego o valor, nao da acesso direto ao objeto

    set: (valor) => {
      if (typeof valor !== "number") {
        throw new TypeError("Mensagem");
      }
      estoque = valor;
    }, //Quando é setado o valor, garante que o valor passado esta correto
  });
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1.estoque);
p1.estoque = 40;
console.log(p1.estoque);
