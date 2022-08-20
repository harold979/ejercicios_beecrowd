var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var n = parseInt(lines.shift());
var a = n;

let nota100 = parseInt(a / 100);
a = a - nota100 * 100;
let nota50 = parseInt(a / 50);
a -= nota50 * 50;
let nota20 = parseInt(a / 20);
a -= nota20 * 20;
let nota10 = parseInt(a / 10);
a -= nota10 * 10;
let nota5 = parseInt(a / 5);
a -= nota5 * 5;
let nota2 = parseInt(a / 2);
a -= nota2 * 2;
let nota1 = parseInt(a);

console.log(n);
console.log(nota100 + " nota(s) de R$ 100,00");
console.log(nota50 + " nota(s) de R$ 50,00");
console.log(nota20 + " nota(s) de R$ 20,00");
console.log(nota10 + " nota(s) de R$ 10,00");
console.log(nota5 + " nota(s) de R$ 5,00");
console.log(nota2 + " nota(s) de R$ 2,00");
console.log(nota1 + " nota(s) de R$ 1,00");
