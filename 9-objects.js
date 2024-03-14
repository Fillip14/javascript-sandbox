/*
Agrupa varias informacoes correlacionadas numa const só
*/
const pessoa = {
  nome: "Luiz",
  sobrenome: "Joao",
  idade: 25,

  fala() {
    console.log(`Minha idade atual é ${this.idade}`);
  },

  incrementarIdade() {
    this.idade++;
  },
};

const criarPessoa = (nome, sobrenome, idade) => {
  return {
    nome,
    sobrenome,
    idade,
  }; //Fucntion entende que nome é nome, sobrenome: sobrenome
};

const pessoa1 = criarPessoa("Luiz", "Otavio", 25);
const pessoa2 = criarPessoa("Joao", "Otavio", 30);
const pessoa3 = criarPessoa("Maria", "Otavio", 35);

pessoa.fala();
pessoa.incrementarIdade();
pessoa.fala();
