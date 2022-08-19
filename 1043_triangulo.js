
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');


let numero = lines.shift().split(" ");

let a = parseFloat(numero[0]);
let b = parseFloat(numero[1]);
let c = parseFloat(numero[2]);



if ((a+b)> c && (a+c) > b && (b+c) > a ){
  let Perimetro = a+b+ c;

  console.log('Perimetro = '+ Perimetro.toFixed(1))

}else {
   let trapecio = parseFloat(a + b) * c / 2;
  console.log('Area = '+ trapecio.toFixed(1)) 

}





