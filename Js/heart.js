document.addEventListener('DOMContentLoaded', function() {
    const headerImage = document.querySelector('.header__image img');
    const heartIcon = document.getElementById('heart-icon');

    headerImage.addEventListener('dblclick', function() {
        // Show the heart icon
        heartIcon.style.display = 'block';

        // Hide the heart icon after the animation ends
        heartIcon.addEventListener('animationend', function() {
            heartIcon.style.display = 'none';
        }, { once: true });
    });
})
