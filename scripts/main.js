// responsive navbar
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector("nav");

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });
}

navSlide();

// clear form on page reload
window.addEventListener('beforeunload', () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
});

