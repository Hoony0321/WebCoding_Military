const moreBtn = document.querySelector(".videoInfo .title .moreBtn");
const titleInfo = document.querySelector(".videoInfo .title .titleInfo");

moreBtn.addEventListener("click", () => {
    titleInfo.classList.toggle('clamp');
    moreBtn.classList.toggle('clicked');
});

