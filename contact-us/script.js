document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Muestra el mensaje de confirmación
    document.getElementById("confirmation").classList.remove("hidden");

    // Limpia los campos
    document.getElementById("contactForm").reset();
});
