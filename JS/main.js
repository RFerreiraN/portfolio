const div = document.querySelector(".text"),
      texto = "Bienvenido a mi portfolio de Frontend Developer!!";

function efectotyping(elemento, texto, i = 0){
    elemento.textContent += texto[i]

     if(i === texto.length -1){
        return
    }
    setTimeout(() => efectotyping(div, texto, i + 1), 100);

}

efectotyping(div, texto)
