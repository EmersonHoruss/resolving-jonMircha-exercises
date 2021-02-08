/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con 
los siguentes datos: id de la película en IMDB, titulo, 
director, año de estreno, país o países de origen, géneros 
y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 
     2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 
     dígitos.
  - Valida que el país o paises sea introducidos en forma 
     de arreglo.
  - Valida que los géneros sean introducidos en forma de 
     arreglo.
  - Valida que los géneros introducidos esten dentro de los 
     géneros aceptados*.
  - Crea un método estático que devuelva los géneros 
     aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 
     pudiendo ser decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la 
     película.
  - Apartir de un arreglo con la información de 3 películas 
     genera 3 instancias de la clase de forma automatizada e 
     imprime la ficha técnica de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, 
Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, 
Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, 
News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, 
Thriller, War, Western.
*/
import {
  validarString,
  validarNumber,
  validarArray,
  mostrarResultadoValidacion} from "./validaciones.js";
class Pelicula {
  constructor({
    id,
    titulo,
    director,
    anioEstreno,
    paisOrigen,
    generos,
    calificacion,
  }) {
    this.id = id;
    this.director = director;
    this.titulo = titulo;
    this.anioEstreno = anioEstreno;
    this.paisOrigen = paisOrigen;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarInputs();
  }

  static get generosAceptados() {
    return [
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
      "Western",
    ];
  }

  validarInputs() {
    console.log(this);
    mostrarResultadoValidacion([
      validarString(this.id, Pelicula.objectToValidateInputs.string.id, "id"),
      validarString(
        this.titulo,
        Pelicula.objectToValidateInputs.string.titulo,
        "titulo"
      ),
      validarString(
        this.director,
        Pelicula.objectToValidateInputs.string.director,
        "director"
      ),
      validarNumber(
        this.anioEstreno,
        Pelicula.objectToValidateInputs.number.anio,
        "año"
      ),
      validarNumber(
        this.calificacion,
        Pelicula.objectToValidateInputs.number.calificacion,
        "calificacion"
      ),
      validarArray(
        this.paisOrigen,
        Pelicula.objectToValidateInputs.array.paisOrigen,
        "pais(es) de origen(es)"
      ),
      validarArray(
        this.generos,
        Pelicula.objectToValidateInputs.array.generos,
        "genero(s)"
      ),
    ]);
  }

  static get objectToValidateInputs() {
    return {
      string: {
        id: {
          rule: /^[a-zA-Z]{2}[0-9]{7}/,
          error:
            "id debe seer: los primeros 2 caracteres letras, los siguientes 7 deben ser numero del 0-9",
        },
        titulo: {
          rule: /^[\w]{1,100}/,
          error: "titulo debe ser: como maximo 100 caracteres",
        },
        director: {
          rule: /^[\w]{1,50}/,
          error: "director debe ser: como maximo 50 caracteres",
        },
      },
      number: {
        anio: {
          min: 1000,
          max: 9999,
          errores: {
            rango:
              "año de estreno debe ser un entero de 4 digitos mayor que 1000 y menor que 9999",
            real: "debe ser entero",
          },
          real: false,
        },
        calificacion: {
          min: 0,
          max: 10,
          errores: {
            rango:
              "calificacion debe ser un numero entero o real en rango de valores [0-10]",
          },
          real: true,
        },
      },
      array: {
        paisOrigen: {
          aceptados: [],
          errores: {
            aceptados: "",
          },
        },
        generos: {
          aceptados: Pelicula.generosAceptados,
          errores: {
            aceptados: "algun(os) genero(s) no reconocido(s)",
          },
        },
      },
    };
  }

  fichaTecnica() {
    console.info(
      `Ficha Técnica: \nTítulo: ${this.titulo} \nDirector: ${
        this.director
      }\nAño: ${this.anio} \nPais: ${this.paisOrigen.join(
        ", "
      )}\nGéneros: ${this.generos.join(", ")}\nCalificación: ${
        this.calificacion
      }\nIMDB id: ${this.id}`
    );
  }
}

const peliculas = [
  {
    id: "tt1234569",
    titulo: "el titsdfasdfulo",
    director: "Manuel medarno",
    anioEstreno: 1999,
    paisOrigen: ["Mexico"],
    generos: ["Comedy", "Sport"],
    calificacion: 8.5,
  },
  {
    id: "tt1234569",
    titulo: "el titsdfasdfulo",
    director: "Manuel medarno",
    anioEstreno: 1999,
    paisOrigen: ["Mexico"],
    generos: ["Comedy", "Sport"],
    calificacion: 8.5,
  },
  {
    id: "tt1234569",
    titulo: "el titsdfasdfulo",
    director: "Manuel medarno",
    anioEstreno: 1999,
    paisOrigen: ["Mexico"],
    generos: ["Comedy", "Sport"],
    calificacion: 8.5,
  },
];

peliculas.forEach((e) => new Pelicula(e).fichaTecnica());

