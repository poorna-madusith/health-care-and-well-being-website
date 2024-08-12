window.addEventListener('scroll', function() {
    var topnavbar = document.querySelector('.topnavbar');
    if (window.scrollY > 50) { // Adjust this value as needed
        topnavbar.classList.add('scrolled');
    } else {
        topnavbar.classList.remove('scrolled');
    }
});