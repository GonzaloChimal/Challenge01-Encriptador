function desencriptarTexto(frase){
    var palabra = frase.replaceAll("ai","a").replaceAll("imes","i").replaceAll("enter","e").replaceAll("ufat","u").replaceAll("ober","o");

    return palabra;
}