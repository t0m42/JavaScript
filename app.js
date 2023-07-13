let cuestionarioPersonal = "REGISTRO DE DATOS PERSONALES";
let rta = "";

function completarCuestionario() {
  let nombre = prompt("Ingrese su nombre completo:");
  let apellido = prompt("Ingrese su apellido:");
  let nacimiento = prompt("Ingrese su fecha de nacimiento:");
  let residencia = prompt("Ingrese la localidad en la que reside actualmente:");

  cuestionarioPersonal +=
    "\nNombre completo: " +
    nombre +
    "\nApellido: " +
    apellido +
    "\nFecha de nacimiento: " +
    nacimiento +
    "\nLocalidad: " +
    residencia;
}

do {
  completarCuestionario();

  rta = prompt(
    "¿Desea finalizar el cuestionario? (Escriba 'finalizar' para salir)"
  ).toUpperCase();
} while (rta !== "FINALIZAR");

alert(cuestionarioPersonal);
