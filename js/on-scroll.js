window.onscroll = function () {
    makeSticky();
    makeVisible();
};

const header = document.getElementById("header");
const sticky = header.offsetHeight;

const visible = sticky;
const arrowIcon = document.getElementById("arrow");
const upButton = document.getElementById("up-button");

function makeSticky() {
    if (window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}

function makeVisible() {
    if (window.scrollY > visible) {
        upButton.classList.remove("hidden");
        arrowIcon.classList.remove("hidden");
    } else {
        upButton.classList.add("hidden");
        arrowIcon.classList.add("hidden");
    }
}
