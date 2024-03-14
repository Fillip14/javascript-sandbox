/**
 Um tipo de lista
 Correto é usar apenas um tipo de dados por arrays
 Sao indexados por elementos
 */

const alunos = ["Luiz", "Maria", "Joao"];

alunos[0] = "Eduardo"; //Alterando o array
alunos[alunos.length] = "Luiza"; //Adiciona no final
alunos.push("Carlos"); //Adiciona no final
alunos.unshift("Fabio"); //Adiciona no inicio

const removePrimeiro = alunos.pop(); //Remove o primeiro e modifica o index
const removeUltimo = alunos.shift(); //Remove o ultimo e modifica o index

delete alunos[2]; //Deleta o dado do array mas mantem o index em ordem de antes

console.log("Apos deletar do index: ", alunos);
console.log(alunos[50]); //Undefined pois nao existe nada nesse index
console.log("Fatiando o array: ", alunos.slice(0, 3)); //Retira apenas no intervalo desse index
console.log("Fatiando o array: ", alunos.slice(0, -1)); //Retira apenas no intervalo desse index
console.log("É um array? ", alunos instanceof Array); //Retorna se é uma instancia de array
