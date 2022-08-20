var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var valor_entero = lines.shift().split(" ");

var a = parseFloat(valor_entero[0]);
var b = parseFloat(valor_entero[1]);
var c = parseFloat(valor_entero[2]);

let valor = [a, b, c].sort((a, b) => {
  if (a == b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});

let valor1 = [a, b, c];

console.log(valor[0] + "\n" + valor[1] + "\n" + valor[2] + "\n");
console.log(valor1[0] + "\n" + valor1[1] + "\n" + valor1[2]);
