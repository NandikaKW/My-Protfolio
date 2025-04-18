const galleryContainer = document.querySelector('.unique-gallery');
const divs = galleryContainer.querySelectorAll('.gallery-wrapper div');
const fullscreenView = galleryContainer.querySelector('.image-view');
const cancelBtn = galleryContainer.querySelector('#cancel-btn');

divs.forEach(function (BG, idx) {
    BG.addEventListener('click', function () {
        fullscreenView.style.display = "block";
        fullscreenView.style.background = `url(assets/images/image_${idx + 1}.jpg) center/cover no-repeat`;

    });
});

cancelBtn.addEventListener('click', function () {
    fullscreenView.style.display = "none";
});