function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  /* let stringMayuscula = array.map(str => str.toUpperCase())
  return stringMayuscula */
  let resultado = []
    for (let i = 0; i < array.length; i++) {
      let str = array[i]
      resultado.push(str.toUpperCase())
    }
  return resultado

}

module.exports = convertirStringAMayusculas;
