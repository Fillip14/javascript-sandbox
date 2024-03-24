function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("BAD VALUE");

    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

// esperaAi("Frase1", 1000)
//   .then((msg) => {
//     console.log(msg);
//     return esperaAi("Frase2", 200);
//   })
//   .then((msg) => {
//     console.log(msg);
//     return esperaAi(2222, 500);
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// const promises = [
//   //   "Primeiro valor",
//   esperaAi("Promise 1", 1000),
//   esperaAi("Promise 2", 500),
//   esperaAi("Promise 3", 2000),
//   //   esperaAi(1000, 2000),
//   //   "Outro valor",
// ];

// Promise.all(promises) Resolve todas e retorna o valor de todas depois
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((e) => {
//     console.log(e);
//   }); Qualquer erro que der cai aqui

// Promise.race(promises) //Retorna a que terminar primeiro, mas as outras continuam a ser executada
//   .then((valor) => {
//     console.log(valor);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const baixaPagina = () => {
  const emCache = false;

  if (emCache) {
    // return Promise.resolve("Pagina em cache");
    return Promise.reject("Pagina em cache");
  } else {
    return esperaAi("Baixei a pagina", 1000);
  }
};

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log("Erro: ", e));
