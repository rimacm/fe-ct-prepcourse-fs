function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let result = arrayOfStrings.filter(item => {
    return item[0] ==="a"
  })
  return  result;

}

module.exports = filter;
