function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  /* for (let i = 1; i < array.length; i++) {
    if(array[i] !== array[ i + 1]){
       return false
    }
    return true
  } */
  let resultado = array.every(item => item === array[0])
  return resultado
}

module.exports = todosIguales;
