function easterEgg() {
    Array.from(document.getElementsByClassName("fa-solid fa-gamepad")).forEach(gamepad =>
        gamepad.className = "fa-solid fa-gift"
    );
}