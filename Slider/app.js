let NumberSlide = 1;
SlShow(NumberSlide);

function SlShow(n){
    let slides = document.getElementsByClassName("Slider") ;
    let points = document.getElementsByClassName("point");


    if (n > slides.length) {
        NumberSlide = 1
    }
    if (n < 1){
        NumberSlide=slides.length
    }
    for (i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    for (i=0; i < points.length; i++){
        points[i].className = points[i].className.replace("active", "");
    }
    // Fade Effect
    slides[NumberSlide-1].style.opacity = "0.4";
    slides[NumberSlide-1].style.transform = "scale(0)";
    slides[NumberSlide-1].style.transition = "all .7s ease-in-out";
    slides[NumberSlide-1].style.display = "block";
    slides[NumberSlide-1].style.animationDuration = "2.5s";
        setTimeout(() => {
            slides[NumberSlide-1].style.transform = "scale(1)";
            slides[NumberSlide-1].style.opacity = "1";
        }, 200);
        points[NumberSlide-1].className+= " active";
    }
function SlActual(n){
    SlShow(NumberSlide = n);
}
function SlideNext(n){
    SlShow(NumberSlide += n);
}