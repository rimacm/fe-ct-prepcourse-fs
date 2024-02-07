function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  let key = color;
  switch (key) {
    case 'blue':
      return `This is ${key}`;
    case 'red':
      return `This is ${key}`;     
    case 'green':
      return `This is ${key}`;
    case 'orange':
      return `This is ${key}`;
    default:
      return 'Color not found'
  }
}


module.exports = colors;
