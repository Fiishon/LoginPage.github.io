function mostrarError(id, mensaje) {
  document.getElementById(id).textContent = mensaje;
}

function limpiarErrores() {
  mostrarError("error-correo", "");
  mostrarError("error-contraseña", "");
  document.getElementById("mensaje").textContent = "";
}

function iniciarSesion() {
  const correo = document.getElementById("correo").value;
  const contrasena = document.getElementById("contrasena").value;
  const mensaje = document.getElementById("mensaje");

  limpiarErrores();

  const usuarioGuardado = JSON.parse(localStorage.getItem("usuarioRegistrado"));

  if (correo === "" && contrasena === "") {
    mensaje.style.color = "red";
    mensaje.textContent = "¡Ingrese sus datos!";
    return;
  }

  let errores = false;

  const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (correo === "" || !correoRegex.test(correo)) {
    mostrarError("error-email", "Ingrese un correo válido.");
    errores = true;
  }
  if (contrasena === "") {
    mostrarError("error-contraseña", "Ingrese una contraseña válida.");
    errores = true;
  }
  if (errores) {
    return;
  }
  if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.contrasena === contrasena) {
    mensaje.style.color = "green";
    mensaje.textContent = "¡Ingreso exitoso!";
    setTimeout(() => {
      window.location.href = "http://localhost/prograweb/boostrapTarea.html";
    }, 1000);
  } else {
    mostrarError("error-contraseña", "Correo o contraseña inválidos");
  }
}

function AbrirRegistro() {
  window.open("Registro.html", "_self")
}
