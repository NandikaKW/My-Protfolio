document.addEventListener('DOMContentLoaded',()=>{
    if (window.matchMedia('(min-width: 1440px)').matches) {
        const navLinks = document.querySelectorAll('.right-side-nav .nav-link');
        // Update active link on scroll
        window.addEventListener('scroll', () => {
            const scrollPos = window.scrollY + 100;

            navLinks.forEach(link => {
                const section = document.querySelector(link.getAttribute('href'));
                if (!section) return;

                if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        });


    }

});