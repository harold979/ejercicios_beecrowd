var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let n = 3.14159;
let r = parseFloat(lines.shift());
let a = (4 / 3) * n * Math.pow(r, 3);

console.log("VOLUME = " + a.toFixed(3));
