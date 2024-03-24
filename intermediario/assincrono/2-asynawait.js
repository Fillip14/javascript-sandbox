function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== "string") {
        reject("BAD VALUE");
        return;
      }

      resolve(msg);
    }, tempo);
  });
}

async function executa() {
  try {
    const fase1 = await esperaAi("Frase1", 2000);
    console.log(fase1);

    const fase2 = await esperaAi("Frase2", 3000);
    console.log(fase2);

    const fase3 = await esperaAi(2222, 800);
    console.log(fase3);
  } catch (e) {
    console.log(e);
  }
}
executa();
console.log("ola");
//pending, retirar o await, vai passar por ela e ela vai estar pendente
//fullfield resolvida, e rejeitada
