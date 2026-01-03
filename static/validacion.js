document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // evita que se envíe sin validar

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

if (!name || !email || !message) {
    alert("Por favor, completa todos los campos.");
    return;
}


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo válido.");
    return;
    }

alert("Formulario válido. Ahora se enviará el mensaje.");
});
