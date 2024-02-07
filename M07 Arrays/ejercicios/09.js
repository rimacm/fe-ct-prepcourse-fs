function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
 /*  let num = array.filter(num => num > 10)
  return num.length */
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      count++;
    }
  }

  return count;
}

module.exports = contarElementosMayoresA10;
