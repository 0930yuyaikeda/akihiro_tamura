'use strict';
// scroll events
window.addEventListener('scroll', () => {
    // setting let
    // setting window scroll
    let scrollPosition = window.scrollY;

    // get element
    let careerTitle = document.getElementById("career-title");
    let careerText = document.getElementById("career-text");
    let actHistoryTitle = document.getElementById("act-history-title");
    let playHistoryTitle = document.getElementById("play-history-title");
    let playHistoryText = document.getElementById("play-history-text");
    let movieHistoryTitle = document.getElementById("movie-history-title");
    let movieHistoryText = document.getElementById("movie-history-text");

    // window size
    let windowHight = window.outerHeight;

    // get element offset top
    let careerTitleTop = (careerTitle.offsetTop) - ( windowHight);
    let careerTextTop = (careerText.offsetTop) - ( windowHight);
    let actHistoryTitleTop = (actHistoryTitle.offsetTop) - ( windowHight);
    let playHistoryTitleTop = (playHistoryTitle.offsetTop) - ( windowHight);
    let playHistoryTextTop = (playHistoryText.offsetTop) - ( windowHight);
    let movieHistoryTitleTop = (movieHistoryTitle.offsetTop) - ( windowHight);
    let movieHistoryTextTop = (movieHistoryText.offsetTop) - ( windowHight);

    // setting class
    const animateFadeIn = "animate__fadeIn";
    const opacity0 = "opacity-0";

    // scroll events
    if ( scrollPosition > careerTitleTop ){
        careerTitle.classList.remove(opacity0);
        careerTitle.classList.add(animateFadeIn);
    }

    if ( scrollPosition > careerTextTop ){
        careerText.classList.remove(opacity0);
        careerText.classList.add(animateFadeIn);
    }

    if ( scrollPosition > actHistoryTitleTop ){
        actHistoryTitle.classList.remove(opacity0);
        actHistoryTitle.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryTitleTop ){
        playHistoryTitle.classList.remove(opacity0);
        playHistoryTitle.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryTextTop ){
        playHistoryText.classList.remove(opacity0);
        playHistoryText.classList.add(animateFadeIn);
    }

    if ( scrollPosition > movieHistoryTitleTop ){
        movieHistoryTitle.classList.remove(opacity0);
        movieHistoryTitle.classList.add(animateFadeIn);
    }

    if ( scrollPosition > movieHistoryTextTop ){
        movieHistoryText.classList.remove(opacity0);
        movieHistoryText.classList.add(animateFadeIn);
    }
});
