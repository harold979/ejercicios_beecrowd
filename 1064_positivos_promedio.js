let input = require("fs").readFileSync("dev/stdin", "utf8");
let lines = input.split("\n");

let array = [];

for (i = 0; i < 6; i++) {
  var valor = parseFloat(lines.shift()).toFixed(2);
  array[i] = valor;
}

for (i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    array.splice(i, 1);
    i--;
  }
}

let count = array.length;
let sum = array.reduce((acc, val) => acc + parseFloat(val), 0);
let average = (sum / count).toFixed(1);

console.log(`${count} valores positivos`);
console.log(average);
