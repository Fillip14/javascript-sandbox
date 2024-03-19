/*
Retorna diversos valores de acordo com quantos yield foram colocados.
Pode ser objetos, functions, etc
O return ele retorna e corta a function
*/

function* geradora1() {
  //Codigo
  yield "valor1";
  //Codigo
  yield "valor2";
  //Codigo
  yield "valor3";
} //Primeira vez que chama retorna o primeiro valor, 2 vez o 2

const g1 = geradora1();
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next());
// console.log(g1.next()); //Aqui ele nao manda nada pois foi 3 vezes

for (let valor of g1) {
  console.log(valor);
}

function* geradora2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  } //Ela fica infinita
}

const g2 = geradora2();
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());
console.log(g2.next());

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();
for (let valor of g4) {
  console.log(valor);
}
