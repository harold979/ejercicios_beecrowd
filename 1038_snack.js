var input = require("fs").readFileSync("dev/stdin", "utf8");
var lines = input.split("\n");

/* const prod1 = {codigo: 1, nome:'Cachorro Quente', preco: 4.00};
const prod2 = {codigo: 2, nome:'X-Salada', preco: 4.50};
const prod3 = {codigo: 3, nome:'X-Bacon', preco: 5.00};
const prod4 = {codigo: 4, nome:'Torrada Simples', preco: 2.00};
const prod5 = {codigo: 5, nome:'Refrigerante', preco: 1.50};

var escolha = parseInt(lines.shift());
var quantidade = parseInt(lines.shift());
var result = 0;

      if(escolha === 1){
        result = prod1.preco*quantidade;
        console.log("Total: R$ "+parseFloat(result.toFixed(2)));
    }else if(escolha === 2){
        result = prod2.preco*quantidade;
        console.log("Total: R$ "+parseFloat(result.toFixed(2)));
    }else if(escolha === 3){
        result = prod3.preco*quantidade;
        console.log("Total: R$ "+parseFloat(result.toFixed(2)));
    }else if(escolha === 4){
        result = prod4.preco*quantidade;
        console.log("Total: R$ "+parseFloat(result.toFixed(2)));
    }else if(escolha === 5){
        result = prod5.preco*quantidade;
        console.log("Total: R$ "+parseFloat(result.toFixed(2)));
    } */

const [code, quantities] = input.map(Number);

function cost(ProductID, quantity, Products) {
  const Product = Products.get(ProductID);
  const value = quantity * Product;
  return value;
}

function main() {
  const Product = [
    [1, 4.0],
    [2, 4.5],
    [3, 5.0],
    [4, 2.0],
    [5, 1.5],
  ]; // [[ID, value]]
  const ProductMap = new Map(Object(Product));
  const Total = cost(code, quantities, ProductMap);

  console.log(`Total: R$ ${Total.toFixed(2)}`);
}

main();
