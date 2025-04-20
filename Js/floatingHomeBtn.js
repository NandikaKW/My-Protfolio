document.addEventListener('DOMContentLoaded', function() {
    // Create and append the floating home button
    const floatingHomeBtn = document.createElement('div');
    floatingHomeBtn.className = 'floating-home-btn';
    floatingHomeBtn.innerHTML = `
    <a href="#home" class="floating-home-btn__link">
      <svg class="floating-home-btn__icon" viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
      <span class="floating-home-btn__text">Home</span>
    </a>
  `;
    document.body.appendChild(floatingHomeBtn);

    // Smooth scroll function
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth'
            });
        }
    }
    const floatingHomeBtnLink = document.querySelector('.floating-home-btn__link');
    floatingHomeBtnLink.addEventListener('click', function(e) {
        e.preventDefault();
        smoothScroll(this.getAttribute('href'));

        // Add click animation
        this.classList.add('floating-home-btn--clicked');
        setTimeout(() => this.classList.remove('floating-home-btn--clicked'), 500);
    });

    // Hide/show floating home button on scroll
    let lastScrollPosition = 0;
    const header = document.querySelector('.header__container');
    const headerHeight = header ? header.offsetHeight : 0;

    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.scrollY;

        // Only show button after scrolling past header
        if (currentScrollPosition > headerHeight) {
            floatingHomeBtn.classList.remove('floating-home-btn--hidden');

            // Hide when scrolling down, show when scrolling up
            if (currentScrollPosition > lastScrollPosition) {
                floatingHomeBtn.classList.add('floating-home-btn--scrolling-down');
            } else {
                floatingHomeBtn.classList.remove('floating-home-btn--scrolling-down');
            }
        } else {
            floatingHomeBtn.classList.add('floating-home-btn--hidden');
        }

        lastScrollPosition = currentScrollPosition;
    });

    // Initialize button state
    if (window.scrollY <= headerHeight) {
        floatingHomeBtn.classList.add('floating-home-btn--hidden');
    }
});