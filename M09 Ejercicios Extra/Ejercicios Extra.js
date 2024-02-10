/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  let arrayDeEntradas = [];
  for (let key in objeto) {
    if (objeto.hasOwnProperty(key)) {
      arrayDeEntradas.push([key, objeto[key]]);
    }
  }
  return arrayDeEntradas;

  /*   let arrayEntradas = Object.entries(objeto)
  return arrayEntradas */
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  let frecuencia = {};
  for (let i = 0; i < string.length; i++) {
    if (frecuencia[string[i]]) {
      frecuencia[string[i]]++;
    } else {
      frecuencia[string[i]] = 1;
    }
  }

  // ordenar alfabeticamente
  let frecuenciaOrdenada = {};
  Object.keys(frecuencia)
    .sort()
    .forEach(function (key) {
      frecuenciaOrdenada[key] = frecuencia[key];
    });
  return frecuenciaOrdenada;
}
//console.log(numberOfCharacters("zadsjfdsfsfjsdjfhacabcsbajda"))

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let may = "";
  let min = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() == string[i]) {
      may += string[i];
    } else {
      min += string[i];
    }
  }
  return may + min;
}
// console.log(capToFront("soyHENRY"));

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:

  /* let palabras = frase.split(" ");
  for (let i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].split("").reverse().join("");
  }
  return palabras.join(" "); */

    let palabras = frase.split(" ").map(item => {
      return  item.split("").reverse().join("")
    }).join(" ")
    return palabras

}

  console.log(asAmirror( "The Henry Challenge is close!") );

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  let numStr = numero.toString();
  let numStrReverso = numStr.split("").reverse().join("");
  if (numero === Number(numStrReverso)) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}
// console.log(capicua(232));

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  return string.replace(/[abc ]/gi, "");
  /*  let  newString = ""
  for (let i=0; i<string.length; i++) {
    if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c') {
       newString += string[i];
    }
  }
  return newString */
}
//console.log(deleteAbc("Abc es una cadena"));

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  let resul = arrayOfStrings.sort((a, b) => a.length - b.length);
  return resul;
}
//console.log(sortArray(["You","are","beautiful","looking"]));

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let interseccion = array1.filter((item) => array2.includes(item));

  /* let arrUnido = array1.concat(array2)
  let interseccion = []
  for (let i = 0; i < arrUnido.length; i++) {
    if(arrUnido.indexOf(arrUnido[i]) !== i && !interseccion.includes(arrUnido[i])){
      interseccion.push(arrUnido[i])
  }
} */

  return interseccion;
}
console.log(buscoInterseccion([4, 2, 3], [1, 3, 4]));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
