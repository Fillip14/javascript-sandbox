/*
Immediately invoked function expression
*/

function qualquerCoisa() {}

(function (idade, peso, altura) {
  console.log(idade, peso, altura);
})(30, 80, 1.8); //Funcao invocada imediatamente e nao é afetada peloo escopo global
