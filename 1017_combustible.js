var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let tiempo = parseInt(lines.shift());

let velocidad = parseInt(lines.shift());

let distancia = parseFloat(tiempo * velocidad) / 12;

console.log(distancia.toFixed(3));
