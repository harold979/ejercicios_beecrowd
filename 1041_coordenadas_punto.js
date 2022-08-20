var input = require("fs").readFileSync("dev/stdin", "utf8");

let lines = input.split(" ");

let x = parseFloat(lines.shift());
let y = parseFloat(lines.shift());

function plano_cartesiano(x, y) {
  if (x === 0.0 && y === 0.0) {
    console.log("Origem");
  } else if (x > 0.0 && y > 0.0) {
    console.log("Q1");
  } else if ((x < 0.0) & (y > 0.0)) {
    console.log("Q2");
  } else if (x < 0.0 && y < 0.0) {
    console.log("Q3");
  } else if (x > 0.0 && y < 0.0) {
    console.log("Q4");
  } else if (y === 0.0) {
    console.log("Eixo X");
  } else if (x === 0.0) {
    console.log("Eixo Y");
  }
}
plano_cartesiano(x, y);
