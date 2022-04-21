//Acceso al formulario
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonLimpiar = document.querySelector("#btn-limpiar");
var formulario = document.querySelector("#formulario");
var mensajeEncriptado = document.querySelector("#msg");
var inputFormulario = document.querySelector("#input-texto");

//Mensaje de error
var errorSpan = document.querySelector("#span-error");
    
//Botones
botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    var textoInput = recibirTextoFormulario(formulario);
    mensajeEncriptado.value = "";
    setTimeout(function(){errorSpan.innerHTML = ""}, 3000);
    
    //Validación de campo vacio    
    if (textoInput.length == 0 || (/^\s*$/.test(textoInput))){
        //Mostrar mensaje de error si no hay texto
        errorSpan.textContent = "Debes Ingresar un texto";
        errorSpan.classList.remove("mensaje-correcto");
        errorSpan.classList.add("mensaje-error");
    }else{
    //Validando mayúsculas y caracteres especiales        
        if (comprobarMayusculas(textoInput)){
            //Mostrar mensaje de error si existen mayúsculas o caracteres especiales
            errorSpan.textContent = "Solo debe ingresar letras minusculas, no se admiten caracteres especiales ni acentos.";
            errorSpan.classList.remove("mensaje-correcto");
            errorSpan.classList.add("mensaje-error");
        }else{
            mensajeEncriptado.value = encriptarTexto(textoInput);
            errorSpan.textContent = "Texto encriptado";
            errorSpan.classList.remove("mensaje-error");
            errorSpan.classList.add("mensaje-correcto");
        }
    }
});

botonDesencriptar.addEventListener("click", function(event){
    event.preventDefault();
    var textoInput = recibirTextoFormulario(formulario);
    mensajeEncriptado.value = "";
    setTimeout(function(){errorSpan.innerHTML = "";}, 3000);;

    if(textoInput.length == 0 || (/^\s*$/.test(textoInput))){
        errorSpan.textContent = "Debes Ingresar un texto";
        errorSpan.classList.add("mensaje-error");
    }else{
        if (comprobarMayusculas(textoInput)){
            errorSpan.innerHTML = "Solo debe ingresar letras minusculas, no se admiten caracteres especiales ni acentos.";
            errorSpan.classList.add("mensaje-error");
        }else{
            mensajeEncriptado.value = desencriptarTexto(textoInput);
            errorSpan.classList.remove("mensaje-error");
            errorSpan.textContent = "Texto desencriptado";
            errorSpan.classList.add("mensaje-correcto");
        }
    }
});

botonLimpiar.addEventListener("click",function(event){
    event.preventDefault();
    mensajeEncriptado.value = "";
});

//Definiendo las funciones
function recibirTextoFormulario(formulario){
    var frase = formulario.texto.value;
    return frase;
}

function comprobarMayusculas(frase){
    var letras = /[^a-z \s]/;
    var resultado = letras.test(frase);

    return resultado;
}