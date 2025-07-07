function mostrarError(id, mensaje) {
  document.getElementById(id).textContent = mensaje;
}

function limpiarErrores() {
  mostrarError("error-recuperar", "");
  document.getElementById("mensaje").textContent = "";
}

function recuperarContrasena() {
  limpiarErrores();

  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje");

  if (correo === "") {
    mostrarError("error-recuperar", "Ingresa tu correo.");
    return;
  }

  const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

  if (usuarioGuardado && usuarioGuardado.correo === correo) {
    mensaje.style.color = "green";
    mensaje.textContent = "Tu contraseña es: " + usuarioGuardado.contrasena;
  } else {
    mensaje.style.color = "red";
    mensaje.textContent = "Correo no encontrado.";
  }
}
