const frutas = ["Maca", "Pera", "Uva"];
const pessoa = {
  nome: "Luiz",
  sobrenome: "Otavio",
  idade: 30,
};

const nome = "Luiz Filipe";

for (let i = 0; i < frutas.length; i++) {
  const par = i % 2 ? (texto = "par") : (texto = "impar");
  console.log(i, frutas[i]);
}

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

for (let letra of nome) {
  console.log(letra);
}

frutas.forEach(function (el, indice) {
  console.log(el, indice);
});
