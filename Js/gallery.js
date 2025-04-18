const galleryContainer = document.querySelector('.unique-gallery');
const divs = galleryContainer.querySelectorAll('.gallery-wrapper div');
const fullscreenView = galleryContainer.querySelector('.image-view');
const cancelBtn = galleryContainer.querySelector('#cancel-btn');

divs.forEach(function (BG) {
    BG.addEventListener('click', function () {
        const img = BG.getAttribute('data-image');
        fullscreenView.style.display = "block";
        fullscreenView.style.background = `url(assets/images/${img}) center/cover no-repeat`;
    });
});

cancelBtn.addEventListener('click', function () {
    fullscreenView.style.display = "none";
});
