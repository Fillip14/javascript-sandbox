let umaString = "Um texto muito grande";

console.log(umaString[3]); //Mostra o caracter do index 3
console.log(umaString.charAt(10)); //Mostra o caracter do index 10, fora da palavar mas mostra vazio
console.log(umaString.concat(" ", "em ", "um lindo dia")); //Tipo de concatenacao
console.log(`${umaString} em um lindo dia`); //Tipo de concatenacao
console.log(umaString.indexOf("Text")); //Mostra o index quando combina esse texto, como nao existe retorna -1
console.log(umaString.indexOf("texto")); //Mostra o index quando combina esse texto,
console.log(umaString.indexOf("o", 3)); //Mostra o index quando combina esse texto após o index 3
console.log(umaString.lastIndexOf("o")); //Mostra o ultimo index quando combina esse texto

console.log(umaString.slice(3, 8)); //Recorta a string do index 2 até o 5, mas o 5 não é incluso
console.log(umaString.slice(-6, -1)); //Recorta a string vai começar do tamanho da string - o index colocado, exemplo: 32-3, 29 até o 32
console.log(umaString.split("t", 2)); //Retira e separa onde tem a letra "t"
console.log(umaString.toLocaleLowerCase()); //Deixa tudo minusculo
console.log(umaString.toLocaleUpperCase()); //Deixa tudo maisculo
