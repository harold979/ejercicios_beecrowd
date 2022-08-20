var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());

let media = parseFloat((a * 2 + b * 3 + c * 5) / 10).toFixed(1);

console.log(`MEDIA = ${media}`);
