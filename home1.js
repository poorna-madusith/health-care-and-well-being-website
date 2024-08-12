// Adjust the video height based on the navbar height
function adjustVideoHeight() {
    const navbar = document.querySelector('.topnavbar');
    const videoContainer = document.querySelector('.video-container');

    const navbarHeight = navbar.classList.contains('shrink') ? 40 : 60; // Adjust these values to match your CSS
    videoContainer.style.height = `calc(100vh - ${navbarHeight}px)`;
}

// Update the header style and adjust video height when scrolling
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink');
    }
    adjustVideoHeight();
});

// Call the function on page load to set initial height
document.addEventListener('DOMContentLoaded', adjustVideoHeight);
