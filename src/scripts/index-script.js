'use strict';
// scroll events
window.addEventListener('scroll', () => {
    // setting let
    // setting window scroll
    let scrollPosition = window.scrollY;

    // get element
    let careerTitle = document.getElementById("career-title");
    let careerText1 = document.getElementById("career-text1");
    let careerText2 = document.getElementById("career-text2");
    let careerText3 = document.getElementById("career-text3");
    let careerText4 = document.getElementById("career-text4");
    let careerText5 = document.getElementById("career-text5");
    let careerText6 = document.getElementById("career-text6");
    let careerText7 = document.getElementById("career-text7");
    let careerText8 = document.getElementById("career-text8");
    let actHistoryTitle = document.getElementById("act-history-title");
    let playHistoryTitle = document.getElementById("play-history-title");
    let playHistoryText1 = document.getElementById("play-history-text1");
    let playHistoryText2 = document.getElementById("play-history-text2");
    let playHistoryText3 = document.getElementById("play-history-text3");
    let playHistoryText4 = document.getElementById("play-history-text4");
    let playHistoryText5 = document.getElementById("play-history-text5");
    let playHistoryText6 = document.getElementById("play-history-text6");
    let playHistoryText7 = document.getElementById("play-history-text7");
    let playHistoryText8 = document.getElementById("play-history-text8");
    let playHistoryText9 = document.getElementById("play-history-text9");
    let playHistoryText10 = document.getElementById("play-history-text10");
    let playHistoryText11 = document.getElementById("play-history-text11");
    let playHistoryText12 = document.getElementById("play-history-text12");
    let movieHistoryTitle = document.getElementById("movie-history-title");
    let movieHistoryText1 = document.getElementById("movie-history-text1");

    // window size
    let windowHight = window.outerHeight;

    // get element offset top
    let careerTitleTop = (careerTitle.offsetTop) - ( windowHight);
    let careerText1Top = (careerText1.offsetTop) - ( windowHight);
    let careerText2Top = (careerText2.offsetTop) - ( windowHight);
    let careerText3Top = (careerText3.offsetTop) - ( windowHight);
    let careerText4Top = (careerText4.offsetTop) - ( windowHight);
    let careerText5Top = (careerText5.offsetTop) - ( windowHight);
    let careerText6Top = (careerText6.offsetTop) - ( windowHight);
    let careerText7Top = (careerText7.offsetTop) - ( windowHight);
    let careerText8Top = (careerText8.offsetTop) - ( windowHight);
    let actHistoryTitleTop = (actHistoryTitle.offsetTop) - ( windowHight);
    let playHistoryTitleTop = (playHistoryTitle.offsetTop) - ( windowHight);
    let playHistoryText1Top = (playHistoryText1.offsetTop) - ( windowHight);
    let playHistoryText2Top = (playHistoryText2.offsetTop) - ( windowHight);
    let playHistoryText3Top = (playHistoryText3.offsetTop) - ( windowHight);
    let playHistoryText4Top = (playHistoryText4.offsetTop) - ( windowHight);
    let playHistoryText5Top = (playHistoryText5.offsetTop) - ( windowHight);
    let playHistoryText6Top = (playHistoryText6.offsetTop) - ( windowHight);
    let playHistoryText7Top = (playHistoryText7.offsetTop) - ( windowHight);
    let playHistoryText8Top = (playHistoryText8.offsetTop) - ( windowHight);
    let playHistoryText9Top = (playHistoryText9.offsetTop) - ( windowHight);
    let playHistoryText10Top = (playHistoryText10.offsetTop) - ( windowHight);
    let playHistoryText11Top = (playHistoryText11.offsetTop) - ( windowHight);
    let playHistoryText12Top = (playHistoryText12.offsetTop) - ( windowHight);
    let movieHistoryTitleTop = (movieHistoryTitle.offsetTop) - ( windowHight);
    let movieHistoryText1Top = (movieHistoryText1.offsetTop) - ( windowHight);

    // setting class
    const animateFadeIn = "animate__fadeIn";
    const opacity0 = "opacity-0";

    // scroll events
    if ( scrollPosition > careerTitleTop ){
        careerTitle.classList.remove(opacity0);
        careerTitle.classList.add(animateFadeIn);
    }

    if ( scrollPosition > careerText1Top ){
        careerText1.classList.remove(opacity0);
        careerText1.classList.add(animateFadeIn);
    }

    if ( scrollPosition > careerText2Top ){
        careerText2.classList.remove(opacity0);
        careerText2.classList.add(animateFadeIn);
    }

    if ( scrollPosition > careerText3Top ){
        careerText3.classList.remove(opacity0);
        careerText3.classList.add(animateFadeIn);
    }

    if ( scrollPosition > careerText4Top ){
        careerText4.classList.remove(opacity0);
        careerText4.classList.add(animateFadeIn);
    }

    if ( scrollPosition > careerText5Top ){
        careerText5.classList.remove(opacity0);
        careerText5.classList.add(animateFadeIn);
    }

    if ( scrollPosition > careerText6Top ){
        careerText6.classList.remove(opacity0);
        careerText6.classList.add(animateFadeIn);
    }

    if ( scrollPosition > careerText7Top ){
        careerText7.classList.remove(opacity0);
        careerText7.classList.add(animateFadeIn);
    }

    if ( scrollPosition > careerText8Top ){
        careerText8.classList.remove(opacity0);
        careerText8.classList.add(animateFadeIn);
    }

    if ( scrollPosition > actHistoryTitleTop ){
        actHistoryTitle.classList.remove(opacity0);
        actHistoryTitle.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryTitleTop ){
        playHistoryTitle.classList.remove(opacity0);
        playHistoryTitle.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText1Top ){
        playHistoryText1.classList.remove(opacity0);
        playHistoryText1.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText2Top ){
        playHistoryText2.classList.remove(opacity0);
        playHistoryText2.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText3Top ){
        playHistoryText3.classList.remove(opacity0);
        playHistoryText3.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText4Top ){
        playHistoryText4.classList.remove(opacity0);
        playHistoryText4.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText5Top ){
        playHistoryText5.classList.remove(opacity0);
        playHistoryText5.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText6Top ){
        playHistoryText6.classList.remove(opacity0);
        playHistoryText6.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText7Top ){
        playHistoryText7.classList.remove(opacity0);
        playHistoryText7.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText8Top ){
        playHistoryText8.classList.remove(opacity0);
        playHistoryText8.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText9Top ){
        playHistoryText9.classList.remove(opacity0);
        playHistoryText9.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText10Top ){
        playHistoryText10.classList.remove(opacity0);
        playHistoryText10.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText11Top ){
        playHistoryText11.classList.remove(opacity0);
        playHistoryText11.classList.add(animateFadeIn);
    }

    if ( scrollPosition > playHistoryText12Top ){
        playHistoryText12.classList.remove(opacity0);
        playHistoryText12.classList.add(animateFadeIn);
    }

    if ( scrollPosition > movieHistoryTitleTop ){
        movieHistoryTitle.classList.remove(opacity0);
        movieHistoryTitle.classList.add(animateFadeIn);
    }

    if ( scrollPosition > movieHistoryText1Top ){
        movieHistoryText1.classList.remove(opacity0);
        movieHistoryText1.classList.add(animateFadeIn);
    }
});
