let btn_entrar = document.getElementById("entrar");
let btn_registrar = document.getElementById("registrar");
let div_entrar = document.getElementById("container_entrar");
let div_registrar = document.getElementById("container_registrar")

btn_entrar.style.backgroundColor = "#88554d";

btn_entrar.addEventListener("click", entrar);
btn_registrar.addEventListener("click", registrar);

function entrar(){
    btn_entrar.style.backgroundColor = "#88554d";
    btn_registrar.style.backgroundColor = "#935A50";
    div_entrar.style.zIndex = "2";
    div_registrar.style.zIndex = "1";
}

function registrar(){
    btn_entrar.style.backgroundColor = "#935A50";
    btn_registrar.style.backgroundColor = "#88554d";
    div_entrar.style.zIndex = "1";
    div_registrar.style.zIndex = "2";
}