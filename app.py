from flask import Flask, request, jsonify, send_from_directory
from procesador import (
    texto_a_binario,
    binario_a_texto,
    xor_binario,
    texto_a_ascii,
    ascii_a_texto
)

app = Flask(__name__, static_folder="static")

@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.route("/codificar", methods=["POST"])
def codificar():
    data = request.get_json(force=True) or {}
    texto = data.get("mensaje", "")
    return jsonify({"resultado": texto_a_binario(texto)})

@app.route("/decodificar", methods=["POST"])
def decodificar():
    data = request.get_json(force=True) or {}
    binario = data.get("mensaje", "")
    return jsonify({"resultado": binario_a_texto(binario)})

@app.route("/xor", methods=["POST"])
def xor():
    data = request.get_json(force=True) or {}
    binario = data.get("mensaje", "")
    clave = data.get("clave", "10101010")
    return jsonify({"resultado": xor_binario(binario, clave)})

@app.route("/ascii", methods=["POST"])
def ascii_codificar():
    data = request.get_json(force=True) or {}
    texto = data.get("mensaje", "")
    return jsonify({"resultado": texto_a_ascii(texto)})

@app.route("/ascii_texto", methods=["POST"])
def ascii_decodificar():
    data = request.get_json(force=True) or {}
    ascii_str = data.get("mensaje", "")
    return jsonify({"resultado": ascii_a_texto(ascii_str)})


@app.route("/login")
def login():
    return send_from_directory("login", "login.html")

@app.route("/contactenos")
def contactenos():
    return send_from_directory("contactenos", "contactenos.html")

if __name__ == "__main__":
    app.run(debug=True)