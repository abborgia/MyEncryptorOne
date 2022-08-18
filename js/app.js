let texArea = document.getElementById("textAreain");
var ocultar = document.getElementsByClassName("ocultar");
let areatexto = document.getElementById("textAreaOut");
let textAreain = document.getElementById("textAreain");
let clickEncriptar = document.getElementsByClassName("btn1")[0];
let desencriptar = document.getElementsByClassName("btn2")[0];
let copiar = document.getElementsByClassName("btn3")[0];
let textoCopiado = "";

window.addEventListener('load', mostrarElementos);

if(areatexto.value == ""){
    
    mostrarElementos();
}

if(areatexto.value != ""){
    ocultarElementos();
}

function ponleFocus(){
    texArea.value = "";
    texArea.focus();
}

function ocultarElementos(){
    ocultar[0].style.display = "none";
    ocultar[1].style.display = "none";
    ocultar[2].style.display = "none";
}
function mostrarElementos(){
    areatexto.value = "";
    ocultar[0].style.display = "block";
    ocultar[1].style.display = "block";
    ocultar[2].style.display = "block";
}

function muestraAlerta(texto){
    alert(texto);
}

ponleFocus();



// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// encriptar mensaje las vocales se convierten en mayusculas

// function teclas(){
//     window.addEventListener("keydown", (event) => {
//         if(!(event.key >= 48 && event.key <= 57)){
//         alert("Solo se pueden ingresar letras y numeros");
//     }
//       }); 
// }

// function verificar(event){ 
    
// }

// textAreain.addEventListener("keydown", (event) => {
//     if(!(event.key >= 48 && event.key <= 57)){
//     alert("Solo se pueden ingresar letras y numeros");
// }
//   }); 
// clickEncriptar.addEventListener("click", click);




clickEncriptar.addEventListener("click", encriptarMensaje);

function encriptarMensaje(){
    let a = textAreain.value;


    a = a.toLowerCase();
    a = a.replaceAll("á", "a");
    a = a.replaceAll("é", "e");
    a = a.replaceAll("í", "i");
    a = a.replaceAll("ó", "o");
    a = a.replaceAll("ú", "u");
    a = a.replaceAll("e", "enter");
    a = a.replaceAll("i", "imes");
    a = a.replaceAll("a", "ai");
    a = a.replaceAll("o", "ober");
    a = a.replaceAll("u", "ufat");


    ocultarElementos();
    areatexto.value = a;

    return a;

}


function copiartxt() {
    var content = areatexto.value;
    console.log("Text copied to clipboard..."+ content)
}



// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// https://stackoverflow.com/questions/51805395/navigator-clipboard-is-undefined
// Simply launch Storybook with localhost instead of ip address which is the default
// In chrome://flags, enable Insecure origins treated as secure and give it the origin you want. 


function copy(){
    var text = areatexto.value;
 
    navigator.clipboard.writeText(text)
    .then(() => {
        console.log('Text copied to clipboard: ' + content);
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}


copiar.addEventListener("click", copy);