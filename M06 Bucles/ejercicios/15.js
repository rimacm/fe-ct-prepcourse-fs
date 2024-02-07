function obtenerDiaSemana(numero) {
  // La función recibe un "numero" entre 1 y 7 por argumento.
  // Devuelve el día de la semana correspondiente a este número,
  // por ejemplo, 1 para "Lunes", 2 para "Martes", etc.
  // El día devuelto debe tener mayúscula inicial y no llevar tilde.
  // Si el número no corresponde a un día de la semana, retorna
  // el string "No es un dia de la semana"
  // Tu código:
  let key = numero
  let texto;
  switch (key) {
    case 1: 
      texto ="Lunes"
      break;
    case 2: 
      texto ="Martes"
      break;
    case 3: 
      texto ="Miercoles"
      break;
    case 4: 
      texto ="Jueves"
      break;
    case 5: 
      texto ="Viernes"
      break;
    case 6: 
      texto ="Sabado"
      break;
    case 7: 
      texto ="Domingo"
      break;
  
    default:
      texto ="No es un dia de la semana";
      break;
  }
  return texto;
}

module.exports = obtenerDiaSemana;