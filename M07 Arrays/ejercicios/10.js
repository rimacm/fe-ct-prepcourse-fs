function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let max = array[0];
  let indiceMaximo = 0;
  
  for (let i = 1; i < array.length; i++) {
    if(array[i] > max){
      max = array[i]
      indiceMaximo = i
    }
    
  }
  return indiceMaximo
}

module.exports = encontrarIndiceMayor;
