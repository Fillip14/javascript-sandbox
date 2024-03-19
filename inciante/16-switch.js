const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto;

switch (diaSemana) {
  case 1:
    diaSemanaTexto = "Segunda";
    break;
  case 2:
    diaSemanaTexto = "Terca";
    break;
  case 3:
    diaSemanaTexto = "Quarta";
    break;
  case 4:
    diaSemanaTexto = "Quinta";
    break;
  case 5:
    diaSemanaTexto = "Sexta";
    break;
  case 6:
    diaSemanaTexto = "Sabado";
    break;
  case 7:
    diaSemanaTexto = "Domingo";
    break;
  default:
    diaSemanaTexto = "Fora do range";
}

console.log(diaSemana);
console.log(diaSemanaTexto);
