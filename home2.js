document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.tipsimagesbuttons');
    const prevButtons = document.querySelectorAll('.prev-button');
    const nextButtons = document.querySelectorAll('.next-button');
    const images = document.querySelectorAll('.imagewithbutton');
    let index = 0;

    const updateButtons = () => {
        prevButtons.forEach(button => button.classList.toggle('hidden', index === 0));
        nextButtons.forEach(button => button.classList.toggle('hidden', index === images.length - 1));
    };

    const showImage = (newIndex) => {
        index = newIndex;
        const offset = -index * 100; // Assuming each image takes 100% width
        container.style.transform = `translateX(${offset}%)`;
        updateButtons();
    };

    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (index > 0) showImage(index - 1);
        });
    });

    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (index < images.length - 1) showImage(index + 1);
        });
    });

    // Initialize buttons visibility
    updateButtons();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
