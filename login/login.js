// --- Datos de usuario falso para validar el login ---
const USER = "admin";
const PASS = "1234";

// --- Evento cuando se envía el formulario ---
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();  // Evita recargar la página

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validación simple
    if (username === USER && password === PASS) {
        alert("¡Inicio de sesión exitoso!");

        // Redirigir al CRUD
        window.location.href = "../crud/crud.html";
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});
