document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentIndex = 0;

    function showSlide(index) {
        const slideWidth = document.querySelector('.slide').clientWidth;
        slides.style.transform = `translateX(${-index * slideWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? 1 : 0;
        showSlide(currentIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 1) ? 0 : 1;
        showSlide(currentIndex);
    });

    window.addEventListener('resize', () => {
        showSlide(currentIndex);
    });

    showSlide(currentIndex);
});



function mostrarTexto(numero) {
    // Esconder todos os textos
    document.querySelectorAll('.texto').forEach(elemento => {
      elemento.style.display = 'none';
    });
  
    // Mostrar apenas o texto correspondente ao botão clicado
    const textoId = `texto${numero}`;
    const textoParaMostrar = document.getElementById(textoId);
    if (textoParaMostrar) {
      textoParaMostrar.style.display = 'block';
    }
  }




  