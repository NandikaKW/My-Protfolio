document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    const menuBtnIcon = menuBtn.querySelector("i");

    const toggleMenu = () => {
        navLinks.classList.toggle("open");
        menuBtnIcon.className = navLinks.classList.contains("open") ? "ri-close-line" : "ri-menu-line";
    };

    const closeMenu = () => {
        navLinks.classList.remove("open");
        menuBtnIcon.className = "ri-menu-line";
    };

    menuBtn.addEventListener("click", toggleMenu);
    navLinks.addEventListener("click", closeMenu);

    const scrollRevealOption = {
        origin: "bottom",
        distance: "50px",
        duration: 1000,
    };

    const revealElements = [
        { selector: ".header__image img", options: { ...scrollRevealOption, origin: "right" } },
        { selector: ".header__content h5", options: { ...scrollRevealOption, delay: 500 } },
        { selector: ".header__content h1", options: { ...scrollRevealOption, delay: 1000 } },
        { selector: ".header__content p", options: { ...scrollRevealOption, delay: 1500 } },
        { selector: ".header__content .links", options: { ...scrollRevealOption, delay: 2000 } }
    ];

    revealElements.forEach(({ selector, options }) => ScrollReveal().reveal(selector, options));



});
