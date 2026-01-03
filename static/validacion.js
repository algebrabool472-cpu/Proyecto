const form = document.getElementById("contactForm");
const statusEl = document.getElementById("status");

form.addEventListener("submit", async (e) => {
e.preventDefault(); 

const nombre = document.getElementById("Nombre").value.trim();
const email = document.getElementById("email").value.trim();
const mensaje = document.getElementById("mensajes").value.trim();


if (!nombre || !email || !mensaje) {
    statusEl.textContent = "Por favor completa todos los campos.";
    return;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    statusEl.textContent = "Por favor ingresa un correo válido.";
    return;
}

try {
    const resp = await fetch("https://formspree.io/f/mykznegn", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ Nombre: nombre, email: email, mensajes: mensaje })
    });

    if (resp.ok) {
    statusEl.textContent = "¡Mensaje enviado con éxito!";
    form.reset();
    } else {
    statusEl.textContent = "Error al enviar el mensaje.";
    }
} catch (err) {
    statusEl.textContent = "Error de conexión.";
}
});