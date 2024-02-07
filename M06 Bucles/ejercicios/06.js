function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
/*   let cadena = num + ""
  return cadena.length === 3 ? true : false; */

   return (num.toString().length === 3)
  
}

module.exports = tieneTresDigitos;
