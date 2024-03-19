// const nome = "Luiz";
// let i = 0;

// while (i < nome.length) {
//   i++;
// }

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
const min = 1;
const max = 10;
let rand = 10;

while (rand !== 10) {
  rand = random(min, max);
  console.log("aqui", rand);
} //Se a expressao for falsa nao executa

do {
  rand = random(min, max);
  console.log("aqui", rand);
} while (rand !== 10); //do while sempre executa uma vez
