var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let nombre_emp = String(lines.shift());
let salario_fijo = parseFloat(lines.shift());
let total_ventas = parseFloat(lines.shift());

let porcentaje = total_ventas * (15 / 100);
let salario_final = porcentaje + salario_fijo;

console.log("TOTAL = R$ " + salario_final.toFixed(2));
