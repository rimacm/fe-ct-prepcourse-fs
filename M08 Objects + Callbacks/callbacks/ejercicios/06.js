function map(array, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:

  /* let resultado = array.map(cb)
  return resultado */
  let arrNuevo = array.map(function (item){
    return cb(item)
  })
  return arrNuevo

  /* let newArr = []
  for(let i = 0; i < array.length; i++){
    // llama el callback con cada elemento
    let result = cb(array[i])
    newArr.push(result)
  }
  return newArr */
}

module.exports = map;
