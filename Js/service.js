// Service Section JavaScript (ScrollReveal Animation)
const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".service .service__card", {
    ...scrollRevealOption,
    interval: 500,
});

<script src="https://unpkg.com/scrollreveal"></script>
<script src="script.js"></script>