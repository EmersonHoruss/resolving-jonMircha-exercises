/*
VALIDAR EXISTENCIA DE ELEMENTO
→Valida que el elemeto no sea ni nulo ni indefinido
→Valida segun tipo de dato:
    →Cadena: Tipo de dato del elemento y no vacio
    →Number: Tipo de dato del elemento
    →Array: Tipo de dato del elemento y no vacio
    →Otros: No soportados
→Valida que el tipo de dato corresponda con el
tipo enviado como parametro
*/
export const existsElement = (e, type = null) =>
  e === null || e === undefined
    ? "ingrese un dato valido, null o undefined no suportado"
    : type === "number"
    ? typeof e === "number"
      ? true
      : "no coincide el type del elemento con el type de entrada"
    : type === "string"
    ? typeof e === "string"
      ? e.length === 0
        ? "la cadena no debe de ser vacia"
        : true
      : "no coincide el type del elemento con el type de entrada"
    : type === "array"
    ? e instanceof Array
      ? e.length === 0
        ? "el arreglo debe tener al menos un elemento"
        : true
      : "no coincide el type del elemento con el type de entrada"
    : "tipo de dato no soportado o no se emparejo type de entrada";

/*
Esta funcion valida si el parametro type hace matching con el tipo
del elemento, si no hace ningun matchin se retornara un mensaje de tipo no 
soportado, si coincide se retorna true para number, para string y array
se tiene que pasar por una validacion extra(validar si tiene elementos)
*/

/*
VALIDAR STRING
→Valida la existencia del elemento pasado. De acuerdo al 
objeto pasado se valida si cumple con la expresion regular
→Gestiona los errores que se le envien mediante el objeto
*/
export const validarString = (
  string,
  { rule, error },
  validado = "",
  type = "string"
) =>
  typeof existsElement(string, type) !== "boolean"
    ? existsElement(string, type) //sino existe el string
    : rule.test(string)
    ? true
    : `Error de ${validado}: ` + error

/*
VALIDAR NUMBER
→Valida la existencia del elemento pasado. De acuerdo al
objeto pasado se valida si se encuentra en un rango y si 
es real. 
→Gestiona los errores que se le envien mediante el objeto
*/
export const validarNumber = (
  number,
  { min, max, errores, real },
  validado = "",
  type = "number"
) =>
  typeof existsElement(number, type) !== "boolean"
    ? existsElement(number, type) //sino existe el numero
    : !(number >= min && number <= max) //existe y se compara
    ? `Error de ${validado}: ` + errores.rango
    : real
    ? true
    : number === Math.trunc(number)
    ? true
    : `Error de ${validado}: ` + errores.real

/*
VALIDAR ARRAY
→Valida la existencia del elemento pasado. De acuerdo al
objeto se valida que todos los elementos del elemento pa
sado esten incluidos dentro del arreglo del objeto
→Gestiona los errores que se le envien mediante el objeto
*/
export const validarArray = (
  array,
  { aceptados, errores },
  validado = "",
  type = "array"
) =>
  typeof existsElement(array, type) !== "boolean"
    ? existsElement(array, type) //sino existe el array
    : aceptados.length === 0
    ? true
    : array.map((e) => aceptados.includes(e)).includes(false)
    ? `Error de ${validado}: ` + errores.aceptados // si existe algun elemento del arreglo que no este dentro de los que he definido
    : true

/*
MOSTRAR RESULTADOS DE UN CONJUNTO DE VALIDACIONES
Por cada validacion se muestra el error si lo tiene, en caso contrario
no muestra nada
*/
export const mostrarResultadoValidacion = (resultados) =>
  resultados.forEach((e) => {
    if (typeof e === "string") console.log(e);
  })
