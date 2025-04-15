const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

const tabList = document.querySelector(".resume__tablist");
tabList.addEventListener("click", (e) => {
    const tabIndex = e.target.dataset.tab;
    if (!tabIndex) return; // Exit if no tab is clicked

    const tabs = document.querySelectorAll("[data-tab]");
    tabs.forEach((tab) => {
        tab.classList.toggle("active", tab.dataset.tab === tabIndex);
    });

    const activePanel = document.querySelector(".panel__grid.active");
    const toActivePanel = document.querySelector(`[data-panel="${tabIndex}"]`);
    if (activePanel.dataset.panel === tabIndex) return;

    activePanel.classList.add("close");
    activePanel.addEventListener("animationend", () => {
        activePanel.classList.remove("active", "close");
        toActivePanel.classList.add("active");
    }, { once: true });
});
