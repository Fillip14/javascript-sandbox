let num1 = 0.1;
let num2 = 0.7;
let num3 = 10.535334;

let invalida = num3 * "Ola";

console.log(num1.toString() + num2.toString()); //Nao estou editando a variavel, so mostrando com string atualmente
console.log(num3.toFixed(4)); //Corta quantas casas decimais quer, mas nao altera, so mostra
console.log(Number.isInteger(num3)); //Retorna se o valor é inteiro ou nao
console.log(Number.isNaN(invalida)); //Retorna se a conta é invalida

num1 += num2;
console.log(num1); //Resultado impreciso

numCorrigido = parseFloat(num1.toFixed(2)); //Number(num1.toFixed(2))
console.log(numCorrigido);

num1 = (num1 * 100 + num2 * 100) / 100; //Corrigin o erro de outra forma
console.log(num1);

console.log(num3 ** (1 / 2)); //Raiz quadrada

console.log(100 / 0); //Ele gera numero Infinity
