// Set new cookie with a name, property and days until it expires
function setCookie(name, value, expiryDays) {
    const date = new Date();
    date.setTime(date.getTime() + (expiryDays*24*60*60*1000));
    let expires = date.toUTCString();
    document.cookie = name + "=" + value + ";expires=" + expires + ";path=/";
    document.cookie = name + "_expiry=" + expires + ";expires=" + expires + ";path=/";
}

// get cookie with specific name
function getCookie(name) {
    let search = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieArray = decodedCookie.split(';');
    for(let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(search) === 0) {
            return cookie.substring(search.length, cookie.length);
        }
    }
    return '';
}

// check if a cookie with specific name exists
function checkCookie(name) {
    let cookie = getCookie(name);
    return cookie !== '';
}
