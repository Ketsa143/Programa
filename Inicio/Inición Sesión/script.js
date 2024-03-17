// Función para alternar la visibilidad de la contraseña
function togglePasswordVisibility(inputId) {
    const passwordInput = document.getElementById(inputId);
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

// Función para mostrar un mensaje emergente
function showAlert(message, type) {
    const alert = document.createElement("div");
    alert.className = `alert ${type}`;
    alert.innerHTML = `<i class="fa fa-exclamation-circle"></i>${message}`;
    document.body.appendChild(alert);
    setTimeout(() => {
        alert.style.display = "none";
    }, 3000);
}

// Captura el envío del formulario y muestra un mensaje de éxito
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    showAlert("Inicio de sesión exitoso", "success");
});

// Captura el envío del formulario y muestra un mensaje de éxito
document.getElementById("register-form").addEventListener("submit", (e) => {
    e.preventDefault();
    showAlert("Registro exitoso", "success");
});

function login() {
    // Obtener los valores de correo y contraseña
    var correo = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    // Validar que ambos campos estén completos
    if (correo.trim() === '' || contrasena.trim() === '') {
        showError('Por favor, completa todos los campos.');
        return;
    }

    // Validar el formato de correo electrónico 
    var correoValido = validateEmail(correo);
    if (!correoValido) {
        showError('Ingresa un correo electrónico válido.');
        return;
    }
    showError('Correo electrónico o contraseña incorrectos.');
}

function showError(message) {
    var errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

