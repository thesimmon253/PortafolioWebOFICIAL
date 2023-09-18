function activarPanel() {

    const contenedor = document.querySelector(".cont-colores");
    
    contenedor.classList.toggle("active");

    const boton = document.querySelector(".open-panel");

    boton.classList.toggle("active");

}

var link = document.getElementById("filecss");

function grey() {
    link.href="CSS/styles.css";

}

function red() {
    link.href="CSS/stylesred.css";

}

function blue(){
    link.href="CSS/stylesblue.css";

}
