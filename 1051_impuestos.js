var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let salario = parseFloat(lines.shift());



if(salario > 0 && salario <= 2000){
console.log('Isento')
}

else if (salario > 2000 && salario <= 3000){
   let  resto = salario - 2000
   let  resultado = resto * 0.08
console.log('R$ '+resultado.toFixed(2))
}

else if(salario > 3000 && salario < 4500){
    let resto = salario - 3000
    let resultado = (resto * 0.18) + (1000 * 0.08)
    console.log('R$ '+resultado.toFixed(2))
}

else{
    let resto = salario - 4500
    let resultado = (resto * 0.28) + (1500 * 0.18) + (1000 * 0.08)
    console.log('R$ '+resultado.toFixed(2))
}
