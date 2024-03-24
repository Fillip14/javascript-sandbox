class DispositivoEletronico {
  constructor(nome, modelo) {
    this.nome = nome;
    this.modelo = modelo;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ` já ligado`);
      return;
    }
    this.ligado = true;
  }
  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ` já desligado`);
      return;
    }
    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico {
  constructor(nome, modelo, cor) {
    super(nome, modelo);
    this.cor = cor;
  }
  ligar() {
    console.log("Sobrescreveu"); //Procura no proto dele e depois do pai...
  }
}

const d1 = new DispositivoEletronico("Celular");
const s1 = new Smartphone("Iphone", "A20", "preto");
s1.ligar();
s1.ligar();
s1.desligar();
console.log(s1);
