const _velocidade = Symbol(); //Metodo anterior para simular variaveis privadas
class Carro {
  //   #velocidade = 0; Novo modo de utilizar variaves privadas de acordo com a ES12, pode apresentar incompatibilidades
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }

  get velocidade() {
    return this[_velocidade];
  }

  set velocidade(valor) {
    if (typeof valor !== "number") return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }
}

const c1 = new Carro("fusca");

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

c1.velocidade = 55;
console.log(c1.velocidade);
