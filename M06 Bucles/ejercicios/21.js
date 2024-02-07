function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
   while (numero > 1) {
    if (numero % 2 !== 0) {
      return false;
    }
    numero /= 2;
  }
  return true
  //otra forma... return numero === 1;
   

 /*  const logaritmoBaseDos = Math.log2(numero);

  // Verificar si el logaritmo es un número entero
  return logaritmoBaseDos === Math.floor(logaritmoBaseDos); */

}

module.exports = esPotenciaDeDos;
