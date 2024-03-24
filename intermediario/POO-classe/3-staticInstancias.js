class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Metodo instancia, referente a instancia
  aumentarVolume() {
    this.volume += 2;
  }

  diminuirVolume() {
    this.volume -= 2;
  }

  //Metodo estatico, ele é referente a classe
  static trocaPilha() {
    console.log("Trocar pilha");
  }
}

const controle1 = new ControleRemoto("LG");
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha(); //So acessa static pela classe, nao tem acesso aos dados
console.log(controle1);
