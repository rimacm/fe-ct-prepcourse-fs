function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  // 👀 Se paso con test 17
  let array = [];
  let suma = num;
  for (let i = 0; i < 10; i++) {
    suma += 2;
    if (suma === i) {
      break;
    }
    array.push(suma);
  }
  if(array.length < 10){
    return "Se interrumpió la ejecución";
  }else{
    return array;
  }
}

module.exports = breakStatement;
