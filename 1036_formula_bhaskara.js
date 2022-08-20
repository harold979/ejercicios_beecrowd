var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let [a, b, c] = lines
  .shift()
  .split(" ")
  .map((e) => +e);
let d = b * b - 4 * a * c;
if (d <= 0 || a === 0) {
  console.log("Impossivel calcular");
  return;
}
let r1 = (-b + Math.sqrt(d)) / (2 * a);
let r2 = (-b - Math.sqrt(d)) / (2 * a);
console.log("R1 = " + r1.toFixed(5));
console.log("R2 = " + r2.toFixed(5));
