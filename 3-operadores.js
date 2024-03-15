/*
    Prioridades:
    1 ()
    2 **
    3 * / %
    4 * + -
 */
const stringNome = "Joao";
const stringNumero = "20";
const num1 = 2;
const num2 = 10;
const passo = 50;
let incremento = 1;
let decremento = 10;
let contadorSoma = 10;
let contadorMultiplicacao = 10;
let contaErrada;
let converterString;

const adicao = num1 + num2; //+ Adiçao/Concatenaçao
const substracao = num1 - num2; //- Subtraçao
const potenciacao = num1 ** num2; //** Potenciacao
const restoDivisao = num1 % num2; //% Resto divisao
incremento++; //++incremento, assim ele primeiro irá incrementar, se colocar o ++ depois primeiro ele executa a let e depois incremento
decremento--; //--Decremento
contadorSoma += passo; //Incrementa diretamente
contadorMultiplicacao *= passo; //Multiplica diretamente
contaErrada = stringNome * num1; //Multiplicacao com str NaN
converterString = Number(stringNumero) * num1; //parseInt, parseFloat, Number conversao

console.log(
  "Adicao " + adicao,
  "Subtracao " + substracao,
  "Potencia " + potenciacao,
  "Resto divisão " + restoDivisao,
  "Incremento " + incremento,
  "Decremento " + decremento,
  "Contador passo " + contadorSoma,
  "Contador multiplicacao " + contadorMultiplicacao,
  "Conta errada " + contaErrada, //NaN
  "Converter string " + converterString
);
