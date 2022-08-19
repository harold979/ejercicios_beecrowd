
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


var valor_entero = lines.shift().split(" ");

var a = parseFloat(valor_entero[0]);
var b = parseFloat(valor_entero[1]);
var c = parseFloat(valor_entero[2]);

var resultado = (Math.max(a,b,c));

console.log(resultado + ' eh o maior');



