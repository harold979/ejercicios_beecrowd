
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


let dias = parseInt(lines.shift());

let años = parseInt(dias/365);
dias = dias % 365;

let meses  = parseInt(dias/30);

dias %= 30;



console.log(años + ' ano(s)');
console.log(meses + ' mes(es)');
console.log(dias + ' dia(s)');



