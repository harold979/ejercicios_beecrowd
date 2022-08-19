
var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n');

let n = parseInt(lines.shift());

const m = {2:0,
           3:0,
           4:0,
           5:0};

let x = lines.shift().split(' ');

//m.forEach(e => e);
for (i =0; i < n;  i++){
  if (x[i] % 2 === 0) m[2] += 1;
  if (x[i] % 3 === 0) m[3] += 1;
  if (x[i] % 4 === 0) m[4] += 1;
  if (x[i] % 5 === 0) m[5] += 1;
}

for (let i in m){
    console.log(`${m[i]} Multiplo(s) de ${i}`)
}
