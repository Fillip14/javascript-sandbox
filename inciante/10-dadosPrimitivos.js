/*
Primitivos (imutavel) - string, number, boolean, undefineds, null (bigint, symbol)

Referencia (mutavel) - array, object, function - nestes se eu referencio, todos se modificam 
*/

let a = "A";
let b = a;
a = "C"; //Como sao imutaveis, let b mantem o dado e só a let a que modifica, sao copiado

////
let arrayA = [1, 2, 3];
let arrayB = arrayA; //Se uso array, object ou fuction, tudo que eu alterar em arrayA, vai se modificar nas copias que fiz, usar sprech seria solucao, aponta pra mesma variavel
let arrayC = [...arrayA]; //spred resolve isso

const pessoasA = {
  nome: "luiz",
  sobrenome: "otavio",
};

const pessoasB = { ...pessoasA };
pessoasA.nome = "Joao";
