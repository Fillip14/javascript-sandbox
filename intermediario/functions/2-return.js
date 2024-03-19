/*
retorna um valor
*/

const soma = (a, b) => {
  return a + b;
};

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador; //Ela lembra do paraemtro passado para function de cima
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2)); //Na const duplica foi declarado antes que o multiplicador é 2, depois de declara foi usado a const duplica passando parametro n a ser utilizado na funcao de retorno
console.log(triplica(2));
console.log(quadriplica(2));
