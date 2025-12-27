def texto_a_binario(texto):
    return ' '.join(format(ord(c), '08b') for c in texto)

def validar_binario(binario):
    chars = binario.split()
    for b in chars:
        if len(b) != 8 or not all(c in "01" for c in b):
            return False
    return True

def binario_a_texto(binario):
    if not validar_binario(binario):
        return "Error: el binario no es válido (debe ser múltiplos de 8 bits con 0/1)."
    chars = binario.split()
    return ''.join(chr(int(b, 2)) for b in chars)

def xor_binario(binario, clave="10101010"):
    if not validar_binario(binario):
        return "Error: el binario no es válido."
    if len(clave) != 8 or not all(c in "01" for c in clave):
        return "Error: la clave XOR debe ser de 8 bits."
    chars = binario.split()
    resultado = []
    for b in chars:
        xor_val = int(b, 2) ^ int(clave, 2)
        resultado.append(format(xor_val, '08b'))
    return ' '.join(resultado)

def texto_a_ascii(texto):
    return ' '.join(str(ord(c)) for c in texto)

def ascii_a_texto(ascii_str):
    try:
        nums = ascii_str.split()
        for n in nums:
            val = int(n)
            if val < 0 or val > 127:
                return "Error: los códigos ASCII deben estar entre 0 y 127."
        return ''.join(chr(int(n)) for n in nums)
    except ValueError:
        return "Error: la cadena ASCII debe contener solo números separados por espacios."