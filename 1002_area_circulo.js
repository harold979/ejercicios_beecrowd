
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

var n  = 3.14159;
var r = parseFloat(lines.shift());
var a = n * Math.pow(r,2);

console.log("A="+ a.toFixed(3));