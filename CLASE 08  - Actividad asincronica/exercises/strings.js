// Strings

// 04 - Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

let texto = "programación";
let textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas);

// 05 - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

let textoLargo = "programación";
let primeros5 = textoLargo.substring(0, 5);
console.log(primeros5);

// 06 - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

let textoLargo2 = "programación";
let ultimos3 = textoLargo2.substring(textoLargo2.length - 3);
console.log(ultimos3);

// 07 - Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

let textoLargo3 = "programación";
let primeraMayuscula = textoLargo3.substring(0, 1).toUpperCase() + textoLargo3.substring(1).toLowerCase();
console.log(primeraMayuscula);

// 08 - Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

let textoConEspacio = "Hola mundo";
let posicionEspacio = textoConEspacio.indexOf(' ');
console.log(posicionEspacio);

// 09 - Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

let palabrasLargas = "programación informática";
let espacio = palabrasLargas.indexOf(' ');
let palabra1 = palabrasLargas.substring(0, espacio);
let palabra2 = palabrasLargas.substring(espacio + 1);
let palabra1Capitalizada = palabra1.substring(0, 1).toUpperCase() + palabra1.substring(1).toLowerCase();
let palabra2Capitalizada = palabra2.substring(0, 1).toUpperCase() + palabra2.substring(1).toLowerCase();
let resultado = palabra1Capitalizada + " " + palabra2Capitalizada;
console.log(resultado);
