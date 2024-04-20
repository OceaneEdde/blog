window.addEventListener("DOMContentLoaded",(event)=>{
    console.log("DOM entièrement chargé et analysé");
    setTimeout(function(){ 
    document.getElementById("loader").style.top = "-100vh";
    }, 1000)


    inputs = document.querySelectorAll("input:not(input[type=\"submit\"]), textarea");

    inputs.forEach(e => {
        e.addEventListener("click",function () {
            inputs.forEach(e => {
                e.style.borderBottom = "2px solid #6fc585";
            });
            e.style.borderBottom = "2px solid black";
        })
    })
});

function moveSlide(carouselId, direction) {
    let carousel = document.getElementById(carouselId);
    let slides = carousel.querySelectorAll('.carousel-item');
    let activeIndex = 0;

    slides.forEach((slide, index) => {
        if (slide.classList.contains('active')) {
            activeIndex = index;
        }
    });

    let newIndex = activeIndex + direction;

    if (newIndex < 0) {
        newIndex = slides.length - 1;
    } else if (newIndex >= slides.length) {
        newIndex = 0;
    }

    slides[activeIndex].classList.remove('active');
    slides[newIndex].classList.add('active');
}
