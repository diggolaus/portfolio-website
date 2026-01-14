let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    // If DOM not ready or no slides yet, do nothing (will be initialized on DOMContentLoaded)
    if (slides.length === 0) return;
    // reset slide number if out of bounds
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    // hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // clear active dot
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // show current slide and activate dot if present
    slides[slideIndex - 1].style.display = "block";
    if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
}

// Ensure first display and start auto-advance every 3 seconds once DOM is ready
(function() {
    let autoSlideIntervalId;
    function startAuto() {
        if (autoSlideIntervalId) return;
        autoSlideIntervalId = setInterval(function() { plusSlides(1); }, 5000);
    }

    function init() {
        showSlides(slideIndex);
        startAuto();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();

