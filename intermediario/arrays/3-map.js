//modifica o valor de acordo com a funcao callback
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const dobrarValor = numeros.map((obj) => obj * 2);
console.log(dobrarValor);

const pessoas = [
  { nome: "Luiz", idade: 62 },
  { nome: "Maria", idade: 32 },
  { nome: "Ju", idade: 43 },
  { nome: "Leticia", idade: 52 },
  { nome: "Gabriel", idade: 56 },
];

const nomes = pessoas.map((obj) => obj.nome);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));

const deletaNome = pessoas.map((obj) => {
  delete obj.nome; //Altera o original
  return obj;
});

const comIds = pessoas.map((obj, indice) => {
  //   obj.id = indice; Isso mexec om o obj original
  const newObj = { ...obj };
  newObj.id = indice;
  return newObj;
});

console.log(comIds);
