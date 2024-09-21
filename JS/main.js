
// Efecto typing
window.sr = ScrollReveal();

    sr.reveal('.navbar', {
        duration: 2000,
        origin: 'top',
        distance: '100px'
    });

    sr.reveal('.left', {
        duration: 2000,
        origin : 'left',
        distance : '100px'
    })

    sr.reveal('.fotoPerfil', {
        duration: 2000,
        origin: 'rigth',
        distance: '150px'
    });

    sr.reveal('.titulo' ,{
        duration: 2500,
        origin: 'bottom',
        distance : '100px'
    });

    sr.reveal('.about', {
        duration : 2500,
        origin : 'bottom',
        distance : '100px'
    });

    sr.reveal('.proyectos', {
        duration: 2000,
        origin : 'left',
        distance: '200px'
    });

    sr.reveal('.tituloPortfolio', {
        duration : 2500,
        origin : 'bottom',
        distance : '100px'
    })

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



