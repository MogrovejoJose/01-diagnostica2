/**
 * ============================================================================
 * EVALUACIÓN DIAGNÓSTICA — BLOQUE C: JAVASCRIPT & DOM (CE3)
 * ============================================================================
 */

// C2. TODO: Seleccionar los elementos del DOM usando const
const inputNombre = document.querySelector("#input-nombre");
const btnSaludar = document.querySelector("#btn-saludar");
const btnLimpiar = document.querySelector("#btn-limpiar");
const resultado = document.querySelector("#mensaje-resultado");

// C3. TODO: Función nombrada para procesar el saludo
function generarSaludo(nombre) {
    return `¡Hola, ${nombre}! Bienvenido/a.`;
}

// C4 y C5. TODO: Eventos para actualizar la pantalla
btnSaludar.addEventListener("click", function () {
    const nombre = inputNombre.value.trim();

    if (nombre !== "") {
        resultado.textContent = generarSaludo(nombre);
    } else {
        resultado.textContent = "Por favor, escribe tu nombre.";
    }
});

btnLimpiar.addEventListener("click", function () {
    inputNombre.value = "";
    resultado.textContent = "Esperando interacción...";
});
