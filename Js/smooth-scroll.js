document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav__links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');

            if (targetId !== '#') {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });

                    const navLinksContainer = document.getElementById('nav-links');
                    navLinksContainer.classList.remove('show');
                }
            }
        });
    });

    const menuBtn = document.getElementById('menu-btn');
    const navLinksContainer = document.getElementById('nav-links');

    menuBtn.addEventListener('click', function() {
        navLinksContainer.classList.toggle('show');
    });
});