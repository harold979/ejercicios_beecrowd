var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());


let ids = {61:'Brasilia',
71:'Salvador',
11:'Sao Paulo',
21:'Rio de Janeiro',
32:'Juiz de Fora',
19:'Campinas',
27:'Vitoria',
31:'Belo Horizonte'};

let resultado = ids[n];

if ( resultado ===  undefined) {
     console.log('DDD nao cadastrado')
}

else{
    console.log(resultado);
} 




/* if (n==61){
    console.log("Brasilia")
}

else if  (n==71){

    console.log("Salvador")
}

else if  (n==11){
    console.log("Sao Paulo")
}

else if (n==21){
    console.log("Rio de Janeiro")
}

else if (n==32){
    console.log("Juiz de Fora")
}

else if (n==19){
    console.log("Campinas")
}

else if (n==27){
    console.log("Vitoria")
}
   
else if (n==31){
    console.log("Belo Horizonte")
}

else{
    console.log("DDD nao cadastrado")
} */
    




