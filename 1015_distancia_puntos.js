var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

let [x1, y1] = lines[0].split(" ");
let [x2, y2] = lines[1].split(" ");

let resultado = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2); // ** en javascript siginifica Asignación de exponenciación
//let resultado = Math.sqrt((x1 - y1 || Math.pow(2))  + (x2 - y2 || Math.pow(2)) );
//let resultado = parseFloat(Math.sqrt((x1 - y1 || Math.pow(2))  + (x2 - y2 || Math.pow(2)) ));

console.log(resultado.toFixed(4));
