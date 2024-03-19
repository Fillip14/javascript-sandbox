/* Funçao é para executar alguma ação */

function soma(x = 2, y = 2) {
  const resultado = x + y;
  return resultado;
  console.log("Nao executa apartir do return");
} //Function tradicional

const resultado = soma(3, 3);
console.log(soma(4, 4));
console.log(soma("Luiz ", "Otavio"));
console.log(soma());
console.log(resultado); //Nao puxa a variavel de dentro da funcao

const raiz = function (numero) {
  return numero ** (1 / 2);
}; //Function const

const elevado = (n) => n ** 2; //Arrow function
