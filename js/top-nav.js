function burgerMenu() {
    const burger = document.getElementById("burger");
    const nav = document.getElementById("top-nav");
    const header = document.getElementById("header");
    const img = document.getElementById("spaceknight-pi-header");
    const topNavIcon = document.getElementById("top-nav-icon");

    const headerHeight = header.clientHeight;
    const burgerTop = burger.offsetTop;
    const burgerLeft = burger.offsetLeft;
    const imgLeft = img.offsetLeft;
    const imgTop = img.offsetTop;

    if (nav.className === "top-nav") {
        nav.className += " responsive";
        nav.className += " slide-down-nav";
        nav.style.top = headerHeight + 'px';
        nav.style.borderBottomLeftRadius = 0 + 'px';
        header.style.borderBottomLeftRadius = 0 + 'px';
        burger.style.top = -headerHeight + burgerTop + 'px';
        burger.style.left = burgerLeft + 'px';
        img.style.position = 'absolute';
        img.style.top = imgTop + 'px';
        img.style.left = imgLeft + 'px';
        topNavIcon.className = 'fa-solid fa-xmark';
    } else {
        nav.className = "top-nav";
        header.style.borderBottomLeftRadius = 20 + 'px';
        img.style.position = '';
        topNavIcon.className = "fa-solid fa-bars";
    }
}

function closeBurgerMenu() {
    const nav = document.getElementById("top-nav");
    const topNavIcon = document.getElementById("top-nav-icon");
    nav.className = "top-nav";
    header.style.borderBottomLeftRadius = 20 + 'px';
    topNavIcon.className = "fa-solid fa-bars";
}
