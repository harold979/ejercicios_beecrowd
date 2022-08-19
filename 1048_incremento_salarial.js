var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseFloat(lines.shift());

if (n >= 0 && n <= 400.00) {
    let aumento = n * (15 / 100);
    let total = n + aumento

    console.log('Novo salario: ' + total.toFixed(2))
    console.log('Reajuste ganho: ' + aumento.toFixed(2))
    console.log('Em percentual: 15 %')


} else if (n >= 400.01 && n <= 800.00) {

    let aumento = n * (12 / 100);
    let total = n + aumento

    console.log('Novo salario: ' + total.toFixed(2))
    console.log('Reajuste ganho: ' + aumento.toFixed(2))
    console.log('Em percentual: 12 %')

} else if (n >= 800.01 && n <= 1200.00) {
    let aumento = n * (10 / 100);
    let total = n + aumento

    console.log('Novo salario: ' + total.toFixed(2))
    console.log('Reajuste ganho: ' + aumento.toFixed(2))
    console.log('Em percentual: 10 %')
} else if (n >= 1200.01 && n <= 2000.00) {
    let aumento = n * (7 / 100);
    let total = n + aumento

    console.log('Novo salario: ' + total.toFixed(2))
    console.log('Reajuste ganho: ' + aumento.toFixed(2))
    console.log('Em percentual: 7 %')
} else if (n > 2000.00) {
    let aumento = n * (4 / 100);
    let total = n + aumento

    console.log('Novo salario: ' + total.toFixed(2))
    console.log('Reajuste ganho: ' + aumento.toFixed(2))
    console.log('Em percentual: 4 %')
}