
document.querySelector('.see-more').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('body').style.transition = 'opacity 0.5s ease';
    document.querySelector('body').style.opacity = '0';
    setTimeout(() => {
        window.location.href = e.target.href;
    }, 500);
});

