'use strict';

// scroll events
window.addEventListener('scroll', () => {
    // setting let
    // setting window scroll
    let scrollPosition = window.scrollY;

    // get element
    // let careerTitle = document.getElementById("career-title");
    let akihiroImage3 = document.getElementById("akihiro-image3");
    let akihiroImage4 = document.getElementById("akihiro-image4");
    let akihiroImage5 = document.getElementById("akihiro-image5");
    let akihiroImage6 = document.getElementById("akihiro-image6");
    let akihiroImage7 = document.getElementById("akihiro-image7");
    let akihiroImage8 = document.getElementById("akihiro-image8");

    // window size
    let windowHight = window.outerHeight;

    // get element offset top
    let akihiroImage3Top = (akihiroImage3.offsetTop) - (windowHight);
    let akihiroImage4Top = (akihiroImage4.offsetTop) - (windowHight);
    let akihiroImage5Top = (akihiroImage5.offsetTop) - (windowHight);
    let akihiroImage6Top = (akihiroImage6.offsetTop) - (windowHight);
    let akihiroImage7Top = (akihiroImage7.offsetTop) - (windowHight);
    let akihiroImage8Top = (akihiroImage8.offsetTop) - (windowHight);

    // setting class
    const animateFadeIn = "animate__fadeIn";
    const opacity0 = "opacity-0";

    // scroll events
    if ( scrollPosition > akihiroImage3Top ){
        akihiroImage3.classList.remove(opacity0);
        akihiroImage3.classList.add(animateFadeIn);
    }

    if ( scrollPosition > akihiroImage4Top ){
        akihiroImage4.classList.remove(opacity0);
        akihiroImage4.classList.add(animateFadeIn);
    }

    if ( scrollPosition > akihiroImage5Top ){
        akihiroImage5.classList.remove(opacity0);
        akihiroImage5.classList.add(animateFadeIn);
    }

    if ( scrollPosition > akihiroImage6Top ){
        akihiroImage6.classList.remove(opacity0);
        akihiroImage6.classList.add(animateFadeIn);
    }

    if ( scrollPosition > akihiroImage7Top ){
        akihiroImage7.classList.remove(opacity0);
        akihiroImage7.classList.add(animateFadeIn);
    }

    if ( scrollPosition > akihiroImage8Top ){
        akihiroImage8.classList.remove(opacity0);
        akihiroImage8.classList.add(animateFadeIn);
    }
});
