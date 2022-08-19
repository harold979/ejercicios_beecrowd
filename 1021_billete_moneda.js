
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');



var entrada = parseFloat( lines.shift() ); 

let billetes = [100, 50, 20, 10, 5, 2];
let monedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
billetes.forEach(e => {
    let totalbilletes = parseInt(entrada / e)
    console.log(`${totalbilletes} nota(s) de R$ ${e.toFixed(2)}`)
    entrada = entrada % e
});

console.log("MOEDAS:");
monedas.forEach(e => {
    let totalmoneda= parseInt(entrada / e)
    console.log(`${totalmoneda} moeda(s) de R$ ${e.toFixed(2)}`)
    entrada = (entrada % e) + 0.00001
});
