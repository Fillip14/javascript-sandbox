/*
 A const com valores imutaveis nao pode ser alterada, já se tiver array ou objetos os valores dentro do array e do objeto podem ser alterados apesar de ser uma const
 */
var nome = "Otavio";
var nome = "Otavio"; //Problema que pode ser redeclarado
let primeiroNome = "Joao"; //Possivel de mudar
const nomeConstante = "Otavio"; //Não altera

const nomeString = "Nome"; //String
const num1 = 10; //number
const num2 = 10.5; //float
const aprovado = true; //bool True, False
const sobrenomeAluno = null; //Nulo, explicitamente para nao apresentar para nenhum local da memória
let nomeAluno; //Undefined, aponta automaticamente para nenhum local da memória
