var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

var valor_entero = lines.shift().split(" ");

var a = parseFloat(valor_entero[0]);
var b = parseFloat(valor_entero[1]);
var c = parseFloat(valor_entero[2]);

if (a < b) {
  temp = a;
  a = b;
  b = temp;
}

if (b < c) {
  temp = b;
  b = c;
  c = temp;
}

if (a < b) {
  temp = a;
  a = b;
  b = temp;
}

if (a >= b + c) {
  console.log("NAO FORMA TRIANGULO");
} else if (a * a == b * b + c * c) {
  console.log("TRIANGULO RETANGULO");
} else if (a * a > b * b + c * c) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (a * a < b * b + c * c) {
  console.log("TRIANGULO ACUTANGULO");
}

if (a == b && b == c) {
  console.log("TRIANGULO EQUILATERO");
} else if (a == b || b == c) {
  console.log("TRIANGULO ISOSCELES");
}
