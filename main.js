// Función para recomendar películas
function recomendarPelicula(tipoPelicula) {
  switch (tipoPelicula.toLowerCase()) {
    case "1":
      return "Misión Imposible: Sentencia mortal - Parte 1";
    case "2":
      return "Sin malos rollos";
    case "3":
      return "Tar";
    case "4":
      return "Godzilla Minus One";
    case "5":
      return "Elemental";
    default:
      return "Lo siento, no puedo recomendar una película para ese tipo.";
  }
}

// Ciclo para permitir que el usuario ingrese varios tipos de películas
let deseaSalir = false;

while (!deseaSalir) {
  // Obtener el tipo de película deseado del usuario
  let tipoPelicula = prompt(
    "¿Qué tipo de película te gustaría ver? \n\n -Elija un numero: \n 1 - Acción \n 2 - Comedia \n 3 - Drama \n 4 - Ciencia ficción \n 5 - Animación \n"
  );

  // Obtener la recomendación de película
  let recomendacion = recomendarPelicula(tipoPelicula);

  // Mostrar la recomendación al usuario
  alert("Te recomendaría ver: " + recomendacion);

  // Preguntar al usuario si desea salir del programa
  deseaSalir = confirm("¿Quieres salir del programa?");

  // Si el usuario elige salir, terminamos el ciclo
}
