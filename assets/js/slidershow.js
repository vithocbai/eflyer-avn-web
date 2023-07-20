window.onload = function () {
    const slideItems = document.querySelectorAll(".slide__item");
    const leftButton = document.querySelector(".slide__controls__left");
    const rightButton = document.querySelector(".slide__controls__right");
    let currentSlide = 0;

    function showSlide(index) {
        slideItems.forEach((item, idx) => {
            item.style.display = idx === index ? "block" : "none";
        });
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slideItems.length;
        showSlide(currentSlide);
    }

    function showPreviousSlide() {
        currentSlide =
            (currentSlide - 1 + slideItems.length) % slideItems.length;
        showSlide(currentSlide);
    }

    leftButton.addEventListener("click", showPreviousSlide);
    rightButton.addEventListener("click", showNextSlide);

    // show slide
    showSlide(currentSlide);

    // Auto slide every 3 seconds
    setInterval(showNextSlide, 3000);
};
