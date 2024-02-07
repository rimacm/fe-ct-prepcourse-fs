function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  // 👀 Se paso con el test 18
  let tablaDelSeis = []
  for (let i = 0; i <= 10; i++) {
    const producto = 6 * i;
    tablaDelSeis.push(producto)
    
  }
  return tablaDelSeis
}

module.exports = tablaDelSeis;
