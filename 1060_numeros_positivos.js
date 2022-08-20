var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var array = [];

for (i = 0; i < 6; i++) {
  var valor = parseFloat(lines.shift()).toFixed(2);
  array[i] = valor;
}

for (i = 0; i < 6; i++) {
  if (array[i] < 0) {
    array.length--;
  }
}

console.log(array.length + " valores positivos");
