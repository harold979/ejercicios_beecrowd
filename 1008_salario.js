
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let n_empleado = parseInt(lines.shift());
let h_trabajadas = parseInt(lines.shift());
let montoxhora = parseFloat(lines.shift());


console.log(`NUMBER = ${n_empleado}` );

console.log('SALARY = U$ ' + (h_trabajadas * montoxhora).toFixed(2));

