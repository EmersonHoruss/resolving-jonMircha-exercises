/*
Para usar las funciones de validaciones debemos tener esta
estructura.
un string debe contener rule y un error
un number debe contener min,max,errores,real
un array debe contener aceptados y errores
*/
const validacion = {
    string: {
      id: {
        rule: /^[a-zA-Z]{2}[0-9]{7}/,
        error:
          "id debe seer: los primeros 2 caracteres letras, los siguientes 7 deben ser numero del 0-9"
      },
      titulo: {
        rule: /^[\w]{1,100}/,
        error: "titulo debe ser: como maximo 100 caracteres"
      },
      director: {
        rule: /^[\w]{1,50}/,
        error: "director debe ser: como maximo 50 caracteres"
      }
    },
    number: {
      anio: {
        min: 1000,
        max: 9999,
        errores: {
          rango: "año de estreno debe ser un entero de 4 digitos mayor que 1000 y menor que 9999",
          real: "debe ser entero"
        },
        real: false,
      },
      calificacion: {
        min: 0,
        max: 10,
        errores: {
          rango:
            "calificacion debe ser un numero entero o real en rango de valores [0-10]"
        },
        real: true
      }
    },
    array: {
      paises: {
        aceptados: [],
        errores: {
          aceptados: ''
        }
      },
      generos: {
        aceptados: [
    "Action",
    "Adult",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Film Noir",
    "Game-Show",
    "History",
    "Horror",
    "Musical",
    "Music",
    "Mystery",
    "News",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Short",
    "Sport",
    "Talk-Show",
    "Thriller",
    "War",
    "Western"
  ],
        errores: {
          aceptados: 'algun(os) genero(s) no reconocido(s)'
        }
      }
    }
  };

// EXISTS ELEMENT 
// we hope to get false value
console.log(existsElement(null));
console.log(existsElement(undefined));
console.log(existsElement(""));
console.log(existsElement([]));
// we hope to get true value
console.log(existsElement(0));
console.log(existsElement(1));
console.log(existsElement("asdf"));
console.log(existsElement([1, 2, 3]));
console.clear();

// Validate number
console.log(1); //
console.log(validacion.number.calificacion);
console.log(validarNumber(123,validacion.number.anio,'año'));
console.log(validarNumber(12311,validacion.number.anio,'año'));
console.log(validarNumber(-1231,validacion.number.anio,'año'));
console.log(validarNumber(1231.0,validacion.number.anio,'año')); // una excepcion de js, cuando termina en .0 lo toma como number entero no real
console.log(validarNumber(1231.9,validacion.number.anio,'año'));
console.log(validarNumber(1231,validacion.number.anio,'año'));
console.log(validarNumber(1231.0,validacion.number.calificacion, 'calificacion'));
console.log(validarNumber(1.0,validacion.number.calificacion, 'calificacion'));

console.clear();

// validarString()
console.log(validarString('',validacion.string.id,'id'));
console.log(validarString('1234',validacion.string.id,'id'));
console.log(validarString('aa1234111',validacion.string.id,'id'));

console.clear();

// validarArray()
console.log(validarArray('[]',validacion.array.generos,'generos'));
console.log(validarArray([],validacion.array.generos,'generos'));
console.log(validarArray([''],validacion.array.generos,'generos'));
console.log(validarArray(['noExisto'],validacion.array.generos,'generos'));
console.log(validarArray(['noExisto', 'Action'],validacion.array.generos,'generos'));
console.log(validarArray(['Action', 'Adult'],validacion.array.generos,'generos'));
console.clear();


// mostrarResultadoValidacion()
mostrarResultadoValidacion([1,2]);
mostrarResultadoValidacion([1,2,'1']);
mostrarResultadoValidacion([1,2,'']);
console.clear();



// validarString()
mostrarResultadoValidacion([
    validarString("", validacion.string.id, "id"),
    validarString("1234", validacion.string.id, "id"),
    validarString("aa1234111", validacion.string.id, "id"),
  ]);
  console.clear();
  
  // validarNumber()
  mostrarResultadoValidacion([
    validarNumber(123, validacion.number.anio, "año"),
    validarNumber(12311, validacion.number.anio, "año"),
    validarNumber(1231.0, validacion.number.anio, "año"),
    validarNumber(1231.4, validacion.number.anio, "año"),
    validarNumber(-1231, validacion.number.anio, "año"),
    validarNumber(1231, validacion.number.anio, "año"),
  ]);
  console.clear();
  
  // validarArray()
  mostrarResultadoValidacion([
    validarArray("[]", validacion.array.generos, "generos"),
    validarArray([], validacion.array.generos, "generos"),
    validarArray([""], validacion.array.generos, "generos"),
    validarArray(["noExisto"], validacion.array.generos, "generos"),
    validarArray(["noExisto", "Action"], validacion.array.generos, "generos"),
    validarArray(["Action", "Adult"], validacion.array.generos, "generos"),
  ]);
  console.clear();
  
  mostrarResultadoValidacion([
    validarString("", validacion.string.id, "id"),
    validarString("1234", validacion.string.id, "id"),
    validarString("aa1234111", validacion.string.id, "id"),
    validarNumber(123, validacion.number.anio, "año"),
    validarNumber(12311, validacion.number.anio, "año"),
    validarNumber(1231.0, validacion.number.anio, "año"),
    validarNumber(1231.4, validacion.number.anio, "año"),
    validarNumber(-1231, validacion.number.anio, "año"),
    validarNumber(1231, validacion.number.anio, "año"),
    validarArray("[]", validacion.array.generos, "generos"),
    validarArray([], validacion.array.generos, "generos"),
    validarArray([""], validacion.array.generos, "generos"),
    validarArray(["noExisto"], validacion.array.generos, "generos"),
    validarArray(["noExisto", "Action"], validacion.array.generos, "generos"),
    validarArray(["Action", "Adult"], validacion.array.generos, "generos"),
  ]);
  console.clear();
  