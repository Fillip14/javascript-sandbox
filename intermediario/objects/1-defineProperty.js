function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, "estoque", {
    enumerable: true, //mostra chave
    value: estoque, //valor, pode ser funcao etc
    writable: false, //nao permite alterar valor
    configurable: true, //nao permite apagar chave, reconfigurar
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //mostra chave
      value: nome, //valor, pode ser funcao etc
      writable: false, //nao permite alterar valor
      configurable: true, //nao permite apagar chave, reconfigurar
    },
    preco: {
      enumerable: true, //mostra chave
      value: preco, //valor, pode ser funcao etc
      writable: false, //nao permite alterar valor
      configurable: true, //nao permite apagar chave, reconfigurar
    },
  });

  // Object.freeze(this);
}

const p1 = new Produto("Camiseta", 20, 3);
console.log(p1);
