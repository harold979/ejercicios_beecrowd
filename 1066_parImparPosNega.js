var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let countPar = 0;
let countImpar = 0;
let countPositivo = 0;
let countNegativo = 0;

for (let i = 0; i < 5; i++) {
  const number = Number(lines[i]);

  if (number % 2 === 0) {
    countPar++;
  } else {
    countImpar++;
  }

  if (number > 0) {
    countPositivo++;
  } else if (number < 0) {
    countNegativo++;
  }
}

console.log(`${countPar} valor(es) par(es)`);
console.log(`${countImpar} valor(es) impar(es)`);
console.log(`${countPositivo} valor(es) positivo(s)`);
console.log(`${countNegativo} valor(es) negativo(s)`);
