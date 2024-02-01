function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  /* 
  //numero no es del tipo "number" 
  if(typeof numero !== "number"){
    return false
  }else if(numero % 1 === 0){
    return true;
  } else {
    return false;
  }
  */
  if(Number.isInteger(numero)){
    return true
  }else{
    return false
  }
}

module.exports = esNumeroEntero;