
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let distancia = parseInt(lines.shift());


console.log((distancia) * 2 + ' minutos');


