const backToTop = document.querySelector(".back-to-top");

if (backToTop) {
    backToTop.addEventListener("click", function (event) {
        event.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");
const menuIcon = menuToggle.querySelector("i");

// Open and close the mobile menu
menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);
});

mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    });
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
});