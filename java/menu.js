let botaoAbrirMenu = document.getElementById("abrirMenu")
let sidebar = document.getElementById("sidebar")
let menu = document.getElementById("menu")

botaoAbrirMenu.addEventListener("click", abrirMenu)


function abrirMenu(){
    sidebar.style.display = "flex"
    menu.style.display = "none"
}


let botaoFecharMenu = document.getElementById("fecharMenu")

botaoFecharMenu.addEventListener("click", fecharMenu)

function fecharMenu(){
    sidebar.style.display = "none"
    menu.style.display = "block"
}