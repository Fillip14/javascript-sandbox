const criaPessoa = (nome, sobrenome, altura, peso) => {
  return {
    nome,
    sobrenome,

    // get nomeCompleto() {
    //   return `${this.nome} ${this.sobrenome}`;
    // },

    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },

    fala(assunto) {
      return `${nome} esta falando ${assunto} e pesa ${this.peso}.`;
    },

    altura,
    peso,

    get imc() {
      //get faz o imc fingir que é um atributo, Getter
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
};

const p1 = criaPessoa("Luiz", "Otavio", 1.8, 80);
p1.nomeCompleto = "Maria Silva"; //Seta um valor para a function
console.log(p1.nome);
console.log(p1.sobrenome);
