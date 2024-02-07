function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let arrPares = []
  for(let i = 0; i < array.length; i++){
    if(!(array[i] % 2)){
      arrPares.push(array[i])
    }
  }
  return arrPares
}

module.exports = filtrarNumerosPares;
