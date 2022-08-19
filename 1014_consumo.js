
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


let distancia_total = parseInt(lines.shift());
let combustible = parseFloat(lines.shift());

let consumo = (distancia_total/combustible); 


console.log(consumo.toFixed(3) + ' km/l');


