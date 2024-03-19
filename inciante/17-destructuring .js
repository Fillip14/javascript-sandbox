const numeros = [1000, 2000, 3000, 400, 5, 6];
const [primeiro, , tres, ...resto] = numeros; //Possivel pular index, colocar rest

const numeros2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const [, [, quatro]] = numeros2; //Possivel pegar do array dentro de array

const { ...resto2 } = numeros2; //Ira indexar cada elemento do array em objeto
console.log(resto2);

const pessoa = {
  nome: "Luiz",
  sobrenome: "Miranda",
  idade: 30,
  endereco: {
    rua: "Avenida tal",
    numero: 30,
  },
};

const { idade = 20 } = pessoa; //Possivel colocar valor padrao

const { nome: teste } = pessoa; //Possivel mudar nome da variavel
const {
  endereco: { rua, numero },
  endereco,
} = pessoa; //Dessa forma o "endereco" nao busca, extrai o que tem dentro

const { sobrenome: sb = 123456 } = pessoa; //Atribui outro nome e valor padrao

const { nome, ...resto3 } = pessoa;

console.log(teste, idade, rua, numero, endereco, resto3);
