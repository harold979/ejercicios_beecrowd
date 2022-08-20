var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

/* let A = lines.shift().split(' ');
let B = lines.shift().split(' ');
   
 const producto_1 = [codigo_producto1 = A[0], n_unidades_1 = A[1], precio_unidad_1 = A[2] ];
const producto_2 = [codigo_producto2 = B[0], n_unidades_2 = B[1], precio_unidad_2 = B[2] ];

let valor_pagar1 = (producto_1[1]*producto_1[2]);
let valor_pagar2 = (producto_2[1]*producto_2[2]);

let valor_total = (valor_pagar1+ valor_pagar2);


console.log('VALOR A PAGAR: R$ ' + valor_total.toFixed(2));  */

let producto_1 = lines.shift().split(" ");
let producto_2 = lines.shift().split(" ");

let codigo_1 = parseInt(producto_1[0]);
let n_unidades_1 = parseInt(producto_1[1]);
let valor_unidad1 = parseFloat(producto_1[2]);

let codigo_2 = parseInt(producto_2[0]);
let n_unidades_2 = parseInt(producto_2[1]);
let valor_unidad2 = parseFloat(producto_2[2]);

console.log(
  "VALOR A PAGAR: R$ " +
    parseFloat(
      n_unidades_1 * valor_unidad1 + n_unidades_2 * valor_unidad2
    ).toFixed(2)
);
