var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let valor = lines.shift().split(" ");

var a = parseInt(valor[0]);
var b = parseInt(valor[1]);
let time = 0;

if (a < b) {
  time = b - a;
  console.log(`O JOGO DUROU ${time} HORA(S)`);
} else if (a > b) {
  time = 24 - (a - b);
  console.log(`O JOGO DUROU ${time} HORA(S)`);
} else if (a == b) {
  time = 24;
  console.log(`O JOGO DUROU ${time} HORA(S)`);
}
