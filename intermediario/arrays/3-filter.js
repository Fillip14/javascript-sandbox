//filtra de acordo com a funcao callback
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const maiorDez = numeros.filter((numeros) => numeros > 10);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 32 },
  { nome: "Ju", idade: 43 },
  { nome: "Leticia", idade: 52 },
  { nome: "Gabriel", idade: 56 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length > 5);
const nomeTerminaComA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);
console.log(nomeTerminaComA);
