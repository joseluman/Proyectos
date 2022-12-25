window.onload = function() {
    sliderPrincipal();
    bounceLinkedin();
    alert("funcionando el deploy")
};

const sliderPrincipal = () => {
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


}

