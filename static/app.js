const API = {
codificar: "/codificar",
decodificar: "/decodificar",
xor: "/xor",
ascii: "/ascii",
asciiTexto: "/ascii_texto",
};

async function postJSON(url, payload) {
const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
});

if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error ${res.status}: ${text || "Sin cuerpo de respuesta"}`);
}
    return res.json();
}

async function codificar() {
    const mensaje = document.getElementById("mensaje").value;
    const data = await postJSON(API.codificar, { mensaje });
    document.getElementById("resultado").innerText = data.resultado;
}

async function decodificar() {
    const mensaje = document.getElementById("mensaje").value;
    const data = await postJSON(API.decodificar, { mensaje });
    document.getElementById("resultado").innerText = data.resultado;
}

async function ascii() {
    const mensaje = document.getElementById("mensaje").value;
    const data = await postJSON(API.ascii, { mensaje });
    document.getElementById("resultado").innerText = data.resultado;
}

async function asciiTexto() {
    const mensaje = document.getElementById("mensaje").value;
    const data = await postJSON(API.asciiTexto, { mensaje });
    document.getElementById("resultado").innerText = data.resultado;
}

async function xor() {
    const mensaje = document.getElementById("mensaje").value;
    const clave = document.getElementById("clave").value || "10101010";
    const data = await postJSON(API.xor, { mensaje, clave });
    document.getElementById("resultado").innerText = data.resultado;
}