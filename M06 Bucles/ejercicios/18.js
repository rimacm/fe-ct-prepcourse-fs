function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  if (a * b < 0){
    return 0;
  }
  let producto = 1;
 if ( a > b){
  // intercambiar valores de a y b
  [a,b] = [b, a]
 }
 for (let i=a; i <= b; i++) {
  producto *= i
}
return producto;
}
module.exports = productoEntreNúmeros;