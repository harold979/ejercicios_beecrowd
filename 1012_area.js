
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');



var area = lines.shift().split(" ");

var a = parseFloat(area[0]);
var b = parseFloat(area[1]);
var c = parseFloat(area[2]);
let triangulo = parseFloat(a * c) / 2;  //Area = b * H /2
let circulo = 3.14159 * Math.pow(c,2);
let trapecio = parseFloat(a + b) * c / 2;//El área del trapecio es igual a la suma de las bases por la altura, y dividido por dos.
let cuadrado = (b * b) ;
let rectangulo = (a*b);

console.log('TRIANGULO: ' + triangulo.toFixed(3));
console.log('CIRCULO: ' + circulo.toFixed(3));
console.log('TRAPEZIO: ' + trapecio.toFixed(3));
console.log('QUADRADO: ' + cuadrado.toFixed(3));
console.log('RETANGULO: ' + rectangulo.toFixed(3));



