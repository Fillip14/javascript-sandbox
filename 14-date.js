const umDia = 60 * 60 * 24 * 1000; //js mexe com data em ms
const data = new Date(umDia);
const data1 = new Date(2019, 3, 20, 15, 14, 27);
const data2 = new Date("2019-04-20T20:20:59");
const dataAtual = new Date();

console.log(data.toString());
console.log(data1.toString());
console.log(data2.toString());

console.log("Dia", dataAtual.getDate());
console.log("Mes", dataAtual.getMonth());
console.log("Ano", dataAtual.getFullYear());
console.log("Hora", dataAtual.getHours());
console.log("Min", dataAtual.getMinutes());
console.log("Dia da semana", dataAtual.getDay());
