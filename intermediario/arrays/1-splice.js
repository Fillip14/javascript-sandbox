// const nomes = new Array("Eduardo", "Maria", "Joana");
const nomes = ["Maria", "Joao", "Eduardo", "Gabriel", "Julia"];

// splce(elemento a remover, quantos elementos, adc el)
// const removidos = nomes.splice(0, 2, "Joana"); //Remove e adiciona
// const removidos = nomes.splice(-2, 2); //Remove dois depois do -2, pra frente
// const removidos = nomes.splice(-2, Number.MAX_VALUE); //Remove tudo depois do -2
const removidos = nomes.splice(3, 0, "Luiz"); //Adc no indice 3, jogou o resto pra frente

console.log(nomes, removidos);
