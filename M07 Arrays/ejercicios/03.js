function encontrarElemento(elemento, array) {
  // Busca el elemento pasado por argumento dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    const elem = array[i];
    
    if (elemento === elem) {
      return i; // Retorna la posición del elemento si lo encuentra
    }
  }
  
  return -1;
 
}

module.exports = encontrarElemento;
