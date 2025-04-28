document.addEventListener('DOMContentLoaded',()=>{
    const viewMoreBtn = document.querySelector('.view-more-btn');
    const popup = document.querySelector('.simple-popup');
    const closeBtn = document.querySelector('.close-btn');

    // Open popup
    viewMoreBtn.addEventListener('click', () => {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // Close popup
    closeBtn.addEventListener('click', () => {
        popup.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

})