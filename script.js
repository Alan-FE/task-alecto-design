let index = 1;
showSlide(index);

function changeSlide(n) {
    showSlide(index +=n);
}

function showSlide(n) {
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");

    if(n > slides.length) {
        index = 1;
    }

    if (n < 1) { 
        index = slides.length;
    }

    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for(let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }

    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
}

