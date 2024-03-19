//modifica o valor de acordo com a funcao callback
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const total = numeros.reduce((acumulador, valor, indice, array) => {
  acumulador += valor;
}, 0);
console.log(total);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 32 },
  { nome: "Ju", idade: 43 },
  { nome: "Leticia", idade: 52 },
  { nome: "Gabriel", idade: 56 },
];

const maisVelha = pessoas.reduce((acumulador, obj) => {
  if (acumulador.idade > obj.idade) return acumulador;
  return valor;
});

console.log(maisVelha);
