const menubar = document.querySelector(".menubar");
const snsLink = document.querySelector(".snsLink");
const hamburger = document.querySelector(".hamburger");


hamburger.addEventListener("click", () => {
    menubar.classList.toggle("active");
    snsLink.classList.toggle("active");
});