//Funciona semelhante a um while, ela encerra quando o if é true
const recursiva = (max) => {
  console.log(max);
  if (max >= 10) return;
  max++;
  recursiva(max);
};

recursiva(-10);
