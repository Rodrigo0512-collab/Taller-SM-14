function validarLogin(event) {
  event.preventDefault();

  const CLAVE_SECRETA = "ok";
  const passwordInput = document.getElementById("password");
  const passwordValue = passwordInput.value.trim().toLowerCase();
  const mensajeError = document.getElementById("mensaje-error");
  const boton = document.querySelector(".login-button");

  // Limpia estado anterior
  mensajeError.textContent = "";
  passwordInput.classList.remove("shake");

  // Si la clave es correcta
  if (passwordValue === CLAVE_SECRETA) {
    boton.disabled = true;
    boton.textContent = "Ingresando...";

    setTimeout(() => {
      window.location.href = "LP.html";
    }, 900);
    return;
  }

  // Si es incorrecta
  mensajeError.textContent = "Clave incorrecta. Inténtalo nuevamente.";
  passwordInput.value = "";

  // Animación shake
  passwordInput.classList.add("shake");

  // Quitar shake después de la animación
  setTimeout(() => {
    passwordInput.classList.remove("shake");
  }, 500);
}

// --- MENÚ HAMBURGUESA ---
const toggleButton = document.querySelector(".menu-toggle");
const menuLateral = document.getElementById("menuLateral");

toggleButton.addEventListener("click", () => {
  menuLateral.classList.toggle("activo");
});
