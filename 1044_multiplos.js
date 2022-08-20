var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let enteros = lines.shift().split(" ");

let a = parseFloat(enteros[0]);
let b = parseFloat(enteros[1]);

if (a % b == 0 || b % a == 0) {
  console.log(" Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
