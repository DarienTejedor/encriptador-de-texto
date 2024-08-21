
//Definir variables
let cajaDeEncriptado;

//Funcion llimpiar el div que elimina la imagen y los dos textos del div del texto encriptado
// function limpiarDiv(){
//     cajaDeEncriptado = document.getElementById("caja_de_encriptado_inicial");
//     cajaDeEncriptado.id = 'caja_de_encriptado_inicial2';
//     cajaDeEncriptado.innerHTML = '';
//     document.getElementById("texto_del_textarea").value = "";
// }

function limpiarDiv() {
    cajaDeEncriptado = document.getElementById("caja_de_encriptado_inicial");
    cajaDeEncriptado.innerHTML = ''; // En lugar de cambiar el ID, solo limpiamos el contenido
    document.getElementById("texto_del_textarea").value = "";
}

//Funcion para agregar el texto encriptado en el div de la derecha
function agregarTextoTrabajado(){
    const parrafoEncriptado = document.createElement('p');
    parrafoEncriptado.textContent = textoIngresado;
    parrafoEncriptado.id = 'texto_encriptado';
    document.getElementById("caja_de_encriptado_inicial").appendChild(parrafoEncriptado);
}

//Agrega el boton de copiar el texto encriptado
function agregarBoton(){
    const boton_copiar = document.createElement('button');
    boton_copiar.textContent = 'Copiar';
    boton_copiar.id = 'boton_copiar';
    document.getElementById('caja_de_encriptado_inicial').appendChild(boton_copiar);
    boton_copiar.addEventListener('click', copiarTexto);
}

function copiarTexto(){
    navigator.clipboard.writeText(textoIngresado)
    boton_copiar.textContent = "Copiado"
}

//////////----------- estilos nuevos del div ----------////////////


function encriptar(){
    let texto = document.getElementById("texto_del_textarea").value;
    const cajaDeEncriptado = document.getElementById("caja_de_encriptado_inicial");

    textoIngresado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
        
    limpiarDiv();
    agregarTextoTrabajado();
    agregarBoton();

//////////----------- estilos nuevos del div ----------/////////
    cajaDeEncriptado.classList.remove('caja_de_encriptado_inicial');
    cajaDeEncriptado.classList.add('caja_de_encriptado_final');
}


function desencriptar(){
    let texto = document.getElementById("texto_del_textarea").value;
    const cajaDeEncriptado = document.getElementById("caja_de_encriptado_inicial");

    textoIngresado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    limpiarDiv();
    agregarTextoTrabajado();
    agregarBoton();

//////////----------- estilos nuevos del div ----------////////////
    cajaDeEncriptado.classList.remove('caja_de_encriptado_inicial');
    cajaDeEncriptado.classList.add('caja_de_encriptado_final');
}


