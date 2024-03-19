/* é possivel mandar parametros sem defini-lo na function por meio do arguments
 */

function funcao() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
funcao(10, 1, 2, 3, 4);

function funcao2(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao2(1, 2, 3); //Nao importa se manda todos os parametros ou nao

function soma(a, b = 0, c = 2) {
  console.log(a + b + c);
}
soma(2, undefined, 4); //Assim é possivel pular um parametro

function pessoa({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
} //Funciona para objects e arrays
pessoa({ nome: "luiz", sobrenome: "otavio", idade: 20 });

// const conta = (...args) => {
const conta = (operador, acumulador, ...numeros) => {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "*") acumulador *= numero;
    if (operador === "/") acumulador /= numero;
  }
  console.log(acumulador);
}; //Rest parametro, ele sempre por ultimo
conta("+", 0, 20, 30, 40, 50);
