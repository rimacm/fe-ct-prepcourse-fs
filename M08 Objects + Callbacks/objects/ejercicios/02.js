function actualizarValorPropiedad(objeto, propiedad, valor) {
  // Actualiza el valor de la propiedad del objeto recibidos en la función.
  // Retorna el objeto actualizado.
  // Tu código:
  // 
  let nuevoObjeto = Object.assign({}, objeto)
  nuevoObjeto[propiedad] = valor;

  return nuevoObjeto
}

module.exports = actualizarValorPropiedad;
