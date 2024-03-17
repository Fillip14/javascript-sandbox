try {
  console.log(naoExisto);
} catch (err) {
  console.log("Nao existe");
}

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números."); //Lança o erro pro catch capturar
  }
  return x + y;
}

try {
  console.log(soma("a", 2));
} catch (error) {
  console.log("Alguma coisa"); //Captura o erro e exibe uma mensagem
}

try {
  //Abrir arquivo e gerou erro, assim arquivo nao foi fechado
} catch (e) {
  //Aqui vai tratar o erro, nao da pra fechar aqui porque ta assumindo que sempre vai dar erro
} finally {
  //Aqui vai fechar o arquivo aberto. Isso é sempre executado
}
