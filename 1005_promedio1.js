var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

let media = parseFloat((a * 3.5 + b * 7.5) / 11).toFixed(5);

console.log(`MEDIA = ${media}`);
