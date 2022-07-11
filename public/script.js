$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);



var span = document.querySelector(".typewriter span");
var textArr = span.getAttribute("data-text").split(", ");
var maxTextIndex = textArr.length;

var sPerChar = 0.15;
var sBetweenWord = 1.5;
var textIndex = 0;

typing(textIndex, textArr[textIndex]);

function typing(textIndex, text) {
    var charIndex = 0;
    var maxCharIndex = text.length - 1;

    var typeInterval = setInterval(function () {
        span.innerHTML += text[charIndex];
        if (charIndex == maxCharIndex) {
            clearInterval(typeInterval);
            setTimeout(function () { deleting(textIndex, text) }, sBetweenWord * 500);

        } else {
            charIndex += 1;
        }
    }, sPerChar * 500);
}

function deleting(textIndex, text) {

    var minCharIndex = 0;
    var charIndex = text.length - 1;

    var typeInterval = setInterval( _=> {

        span.innerHTML = text.substr(0, charIndex);

        if (charIndex == minCharIndex) {

            clearInterval(typeInterval);
            textIndex + 1 == maxTextIndex ? textIndex = 0 : textIndex += 1;
            setTimeout(function () { typing(textIndex, textArr[textIndex]) }, sBetweenWord * 500);

        } else {
            charIndex -= 1;
        }

    }, sPerChar * 500);

}


