

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
    });

    sr.reveal('.tituloEducacion', {
        duration : 2500,
        origin : 'bottom',
        distance : '100px'
    });

    sr.reveal('.diplomas', {
        duration : 2000,
        origin : 'left',
        distance : '200px'
    });

    sr.reveal('.back', {
        duration : 2500,
        origin : 'right',
        distance : '200px'
    });

    sr.reveal('.tituloSkills', {
        duration : 2500,
        origin : 'bottom',
        distance : '100px'
    });

    sr.reveal('.lenguajes', {
        duration : 2000,
        origin : 'left',
        distance : '200px'
    });

    sr.reveal('.frameworks', {
        duration : 2000,
        origin : 'right',
        distance : '200px'
    });

    sr.reveal('.software', {
        duration : 2000,
        origin : 'left',
        distance : '200px'
    });

    sr.reveal('.titles', {
        duration : 2500,
        origin : 'top',
        distance : '200px'
    });

    sr.reveal('.tituloContacto', {
        duration : 2500,
        origin : 'bottom',
        distance : '100px'
    });

    sr.reveal('.links-contact' , {
        duration : 2000,
        origin : 'left',
        distance : '200px'
    });

    sr.reveal('footer' , {
        duration : 2000,
        origin : 'bottom',
        distance : '200px'
    })


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

document.querySelectorAll('.list li a').forEach(link => {
        link.addEventListener('click', function() {
            document.querySelector('.list li a.is-active')?.classList.remove('is-active');
            this.classList.add('is-active');
        });
});



