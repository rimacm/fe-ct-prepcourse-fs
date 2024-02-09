const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:
  let contador = []
  for(let  key in objeto){
      contador.push(key);
  }
  return contador.length;
};

module.exports = contarPropiedades;
