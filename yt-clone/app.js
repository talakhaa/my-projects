document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('scrolling-content-2');
    const scrollLeftButton = document.getElementById('left-scrolling-button');
    const scrollRightButton = document.getElementById('right-scrolling-button');

    // Function to hide or show buttons based on scroll position
    function updateScrollButtons() {
        // Check if we're at the start (scrollLeft is 0)
        if (scrollContainer.scrollLeft === 0) {
            scrollLeftButton.style.display = 'none'; // Hide the left button
        } else {
            scrollLeftButton.style.display = 'block'; // Show the left button
        }

        // Check if we're at the end (scrollLeft + clientWidth is equal to or greater than scrollWidth)
        if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
            scrollRightButton.style.display = 'none'; // Hide the right button
        } else {
            scrollRightButton.style.display = 'block'; // Show the right button
        }
    }

    // Scroll left button click handler
    scrollLeftButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -200, behavior: 'smooth' });
    });

    // Scroll right button click handler
    scrollRightButton.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: 200, behavior: 'smooth' });
    });

    // Call the function initially to set the correct button visibility
    updateScrollButtons();

    // Update button visibility when scrolling
    scrollContainer.addEventListener('scroll', updateScrollButtons);
});

