const falar = {
  falar() {
    console.log("Fale");
  },
};

const comer = {
  comer() {
    console.log("Come");
  },
};

const beber = {
  beber() {
    console.log("Bebe");
  },
};

const pessoaPrototype = { ...falar, ...comer, ...beber };

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa("Luiz", "Otavio");
console.log(p1.falar());
