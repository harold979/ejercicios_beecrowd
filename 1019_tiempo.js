var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let segundos = parseInt(lines.shift());

let minutos = parseInt(segundos / 60);
segundos = segundos % 60;
let horas = parseInt(minutos / 60);
minutos %= 60; // Asignación de residuo	x %= y

console.log(horas + ":" + minutos + ":" + segundos);
