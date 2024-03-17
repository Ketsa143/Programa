document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    const errorMessage = document.getElementById('error-message');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Obtener los valores de los campos
        const nombre = document.getElementById('nombre').value;
        const telefono = document.getElementById('telefono').value;
        const correo = document.getElementById('correo').value;
        const contrasena = document.getElementById('contrasena').value;
        const confirmContrasena = document.getElementById('confirm-contrasena').value;

        // Validar que los campos no estén vacíos
        if (nombre.trim() === '' || telefono.trim() === '' || correo.trim() === '' || contrasena.trim() === '' || confirmContrasena.trim() === '') {
            errorMessage.textContent = 'Por favor, completa todos los campos.';
            errorMessage.style.display = 'block';
            return;
        }

        // Validar el formato de correo electrónico (puedes usar una expresión regular)
        const correoValido = validateEmail(correo);
        if (!correoValido) {
            errorMessage.textContent = 'Ingresa un correo electrónico válido.';
            errorMessage.style.display = 'block';
            return;
        }

        // Validar que las contraseñas coincidan
        if (contrasena !== confirmContrasena) {
            errorMessage.textContent = 'Las contraseñas no coinciden.';
            errorMessage.style.display = 'block';
            return;
        }

        // Si todo es válido, aquí puedes enviar los datos de registro al servidor o realizar alguna otra acción
        // Por ejemplo, puedes mostrar un mensaje de éxito
        errorMessage.textContent = 'Registro exitoso.';
        errorMessage.style.color = 'green';
        errorMessage.style.display = 'block';
    });
});

function validateEmail(email) {
    // Puedes usar una expresión regular para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.addEventListener('DOMContentLoaded', function() {
    const formGroups = document.querySelectorAll('.form-group');

    formGroups.forEach(function(formGroup) {
        const input = formGroup.querySelector('input');
        const label = formGroup.querySelector('label');
        const symbol = formGroup.querySelector('.symbol');

        input.addEventListener('input', function() {
            // Verifica si el campo de entrada tiene algún valor
            if (input.value.trim() !== '') {
                // Oculta el título o el texto predeterminado
                label.style.display = 'none';
                // Muestra el símbolo junto al campo
                symbol.style.display = 'inline-block';
            } else {
                // Si el campo está vacío, muestra el título o el texto predeterminado
                label.style.display = 'block';
                // Oculta el símbolo
                symbol.style.display = 'none';
            }
        });
    });
});
