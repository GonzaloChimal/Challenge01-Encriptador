function encriptarTexto(frase){
    var textoArray = [];

    for(var i = 0; i < frase.length; i++){ 
        var letra = frase[i];
        if(letra.match(/[aeiou]/)){
            if(letra == ("a")){
                textoArray.push("ai");
            } 
            else if(letra == ("e")){
                textoArray.push("enter")
            }
            else if(letra == ("i")){
                textoArray.push("imes")
            }
            else if(letra == ("o")){
                textoArray.push("ober")
            }
            else{
                textoArray.push("ufat")
            }
        }else{
            textoArray.push(letra);
            }
    }    
    return textoArray.join("");
}