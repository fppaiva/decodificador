function criptografar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}


function descriptografar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}


function criptografarTexto() {
    var textoOriginal = document.querySelector(".container_textoEntrada").value;
    var textoCriptografado = criptografar(textoOriginal);
    document.querySelector(".textoCriptografado").value = textoCriptografado;
    document.querySelector(".textoCriptografado").style.display = "block";
    document.querySelector(".imagemCriptografando").style.display = "none";

    document.querySelector(".container_btnCopiar").style.display = "block";
}


function descriptografarTexto() {
    var textoCriptografado = document.querySelector(".textoCriptografado").value;
    var textoDescriptografado = descriptografar(textoCriptografado);
    document.querySelector(".container_textoEntrada").value = textoDescriptografado;
    document.querySelector(".imagemCriptografando").style.display = "block";
    document.querySelector(".textoCriptografado").style.display = "none";
    document.querySelector(".container_btnCopiar").style.display = "none";
}


function limparTexto() {
    document.querySelector(".container_textoEntrada").value = ""; // Limpa apenas o texto digitado pelo usuário
    document.querySelector(".container_btnCopiar").style.display = "none"; // Oculta o botão de copiar
}



function copiarTexto() {
    var textoCriptografado = document.querySelector(".textoCriptografado");
    textoCriptografado.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}
