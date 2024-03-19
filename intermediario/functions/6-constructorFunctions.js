/*
Funcao construtora e fabrica fazem objetos
Na construtora precisa sempre iniciar o nome com letra maiscula
*/

function Pessoa(nome, sobrenome) {
  //Atributos privados, nao sao acessados fora da construtora
  const ID = 123456;
  const metodoInterno = () => {};

  //Atributos publico, sao acessados fora da construtora
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome);
  };
}

const p1 = new Pessoa("Luiz", "Otavio");
const p2 = new Pessoa("Maria", "Otavio");

console.log(p1.ID);
