function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let aux = []
  for (let i = 0; i < numeros.length; i++) {
    if(numeros.indexOf(numeros[i]) !== i && !aux.includes(numeros[i]) ){
      aux.push(numeros[i])
    }
  }
  return aux[0]
}

module.exports = encontrarElementoRepetido;