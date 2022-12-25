window.onload = function() {
    //sliderPrincipal();
    //bounceLinkedin();
    /*alert("Hola...");
    alert("Felicidades por encontrar el código qr dentro de la mochila jajaja...")
    alert("Tienes que esperar un poco ya que tu regalo se está generando en este momento ;)...");
    alert("Esta será una de las muchas aventuras que viviremos..."); 
    alert("Espero te guste mucho.. :9");
    alert("PD: Te amo <3")*/
    toBrasil();
};

/*const sliderPrincipal = () => {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
    });
}

const bounceLinkedin = () => {
    const svgIcon = document.querySelector('.redes svg');

    svgIcon.addEventListener('mouseover', e => {
        svgIcon.classList.add('animate__rubberBand');
    });
    svgIcon.addEventListener('mouseout', e => {
        svgIcon.classList.remove('animate__rubberBand');
    });


}*/

const toBrasil = () => {
  const r = setInterval(function(){
    alert("Hola...");
    alert("Felicidades por encontrar el código qr dentro de la mochila jajaja...")
    alert("Tienes que esperar un poco ya que tu regalo se está generando en este momento ;)...");
    alert("Esta será una de las muchas aventuras que viviremos..."); 
    alert("Espero te guste mucho.. :9");
    alert("PD: Te amo <3")
    clearInterval(r)
  }, 5000)
}

