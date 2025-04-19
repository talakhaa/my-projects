document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section-2-contents");

    sections.forEach(section => {
        const scrollContainer = section.querySelector(".section-2-contents-movies-container");
        const leftArrow = section.querySelector(".section-2-contents-arrow-buttons:first-child");
        const rightArrow = section.querySelector(".section-2-contents-arrow-buttons:last-child");

        const scrollAmount = 1200;
        const scrollDuration = 500;

        function smoothScroll(container, amount, duration) {
            const start = container.scrollLeft;
            const startTime = performance.now();

            function scrollStep(timestamp) {
                const elapsed = timestamp - startTime;
                const progress = Math.min(elapsed / duration, 1);
                container.scrollLeft = start + amount * easeInOutQuad(progress);

                if (progress < 1) {
                    requestAnimationFrame(scrollStep);
                } else {
                    checkArrows();
                }
            }

            requestAnimationFrame(scrollStep);
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function checkArrows() {
            if (scrollContainer.scrollLeft <= 0) {
                leftArrow.classList.add("disabled");
            } else {
                leftArrow.classList.remove("disabled");
            }

            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                rightArrow.classList.add("disabled");
            } else {
                rightArrow.classList.remove("disabled");
            }
        }

        leftArrow.addEventListener("click", () => {
            smoothScroll(scrollContainer, -scrollAmount, scrollDuration);
        });

        rightArrow.addEventListener("click", () => {
            smoothScroll(scrollContainer, scrollAmount, scrollDuration);
        });

        scrollContainer.addEventListener("scroll", checkArrows);
        checkArrows();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.getElementById("section-3-content-main-scroll-movie-div");
    const scrollLeftBtn = document.getElementById("section-3-content-main-scroll-movie-div-left-arrow");
    const scrollRightBtn = document.getElementById("section-3-content-main-scroll-movie-div-right-arrow");

    const scrollAmount = 845;
    const scrollDuration = 500;

    function smoothScroll(container, amount, duration) {
        const start = container.scrollLeft;
        const startTime = performance.now();

        function scrollStep(timestamp) {
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            container.scrollLeft = start + amount * easeInOutQuad(progress);

            if (progress < 1) {
                requestAnimationFrame(scrollStep);
            }
        }

        requestAnimationFrame(scrollStep);
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    scrollLeftBtn.addEventListener("click", () => {
        smoothScroll(scrollContainer, -scrollAmount, scrollDuration);
    });

    scrollRightBtn.addEventListener("click", () => {
        smoothScroll(scrollContainer, scrollAmount, scrollDuration);
    });
});

