// Efecto typing

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


// Clase is active del menu

document.querySelectorAll('.menu li a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.menu li a.is-active')?.classList.remove('is-active');
            this.classList.add('is-active');
        });
});

