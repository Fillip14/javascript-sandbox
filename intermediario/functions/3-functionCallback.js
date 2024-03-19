/*
Usa para executar algo somente apos outra coisa ser executada
Promises resolve isso
*/
const f1 = (callback) => {
  if (callback) callback();
};
const f2 = (callback) => {
  if (callback) callback();
};
const f3 = (callback) => {
  if (callback) callback();
};

// f1(function () {
//   f2(function () {
//     f3(function () {
//       console.log("ola mundo");
//     });
//   });
// });

const f1callBack = () => f2(f2callBack);
const f2callBack = () => f3(f3callBack);
const f3callBack = () => console.log("Ola mundo");

f1(f1callBack);
