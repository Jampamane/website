document.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;
    let heroSection = document.querySelector(".homepage-hero");

    let parallaxOffset = Math.min(scrollTop * 0.4);
    heroSection.style.backgroundPosition = `center calc(50% - ${parallaxOffset}px)`;
});