function tienePropiedad(objeto, propiedad) {
  // Verifica si el objeto recibido posee una propiedad con el mismo nombre que el parámetro "propiedad".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:

  //No verifica si el objeto tiene una propiedad con el mismo nombre que el parámetro "propiedad", sino si el valor de la propiedad coincide con el nombre de la propiedad.

   // Verificar si el objeto tiene una propiedad con el nombre especificado.
 return propiedad in objeto
}

module.exports = tienePropiedad;
