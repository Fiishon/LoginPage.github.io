function mostrarError(id, mensaje) {
    document.getElementById(id).textContent = mensaje;
}

function limpiarErrores() {
    mostrarError("error-nombre", "");
    mostrarError("error-apellidoP", "");
    mostrarError("error-apellidoM", "");
    mostrarError("error-correo", "");
    mostrarError("error-contraseña", "");
    document.getElementById("mensaje").textContent = "";
}

function validarNombre(nombre) {
    const regex = /^([A-Z][a-zA-Z]*)(\s[A-Z][a-zA-Z]*)*$/;
    return regex.test(nombre);
}

function validarApellido(apellido) {
    const regex = /^[A-Z][a-zA-Z]*$/;
    return regex.test(apellido);
}

function validarCorreo(correo) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(correo);
}

function validarContrasena(contrasena) {
  const letra = /[A-Za-z]/.test(contrasena);
  const numero = /[0-9]/.test(contrasena);
  const especial = /[!@#$%^&*(),.?":{}|<>]/.test(contrasena);
  const longitud = contrasena.length >= 8;

  return longitud && letra && numero && especial;
}

function registrar() {
  limpiarErrores();

  const nombre = document.getElementById("nvnombre").value.trim();
  const apellidoP = document.getElementById("nvapellidoP").value.trim();
  const apellidoM = document.getElementById("nvapellidoM").value.trim();
  const usuario = document.getElementById("nvusuario").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const contrasena = document.getElementById("contrasena").value;
  const mensaje = document.getElementById("mensaje");

  let errores = false;

  if (nombre === "" || apellidoP === "" || apellidoM === "" || usuario === "" || correo === "" || contrasena === "") {
    mensaje.style.color = "red";
    mensaje.textContent = "Completa todos los campos.";
    return;
  }

  if(!validarNombre(nombre)) {
    mostrarError("error-nombre", "Debe comenzar por una mayúscula y no contener números.");
    errores = true;
  }

  if(!validarApellido(apellidoP)) {
    mostrarError("error-apellidoP", "Debe comenzar por una mayúscula y no contener números.");
    errores = true;
  }

  if(!validarApellido(apellidoM)) {
    mostrarError("error-apellidoM", "Debe comenzar por una mayúscula y no contener números.");
    errores = true;
  }

  if (!validarCorreo(correo)) {
    mostrarError("error-correo", "Ingrese un correo válido.");
    errores = true;
  }

  if (!validarContrasena(contrasena)) {
    mostrarError(
      "error-contraseña","Debe tener al menos 8 caracteres, incluir letras, números y un símbolo.");
    errores = true;
  }

  if (errores) {
    return;
  }

  const usuarioNuevo = {
    nombre: nombre,
    apellidoPaterno: apellidoP,
    apellidoMaterno: apellidoM,
    usuario: usuario,
    correo: correo,
    contrasena: contrasena
  };

  localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioNuevo));

  mensaje.style.color = "green";
  mensaje.textContent = "¡Registro exitoso!";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
}

