function validateFeedback() {
    const RED = '#FE0000';
    const GREEN = '#119F0B';
    let valid = true;
    let name = document.forms["feedback-form"]["feedback-name"].value;
    let email = document.forms["feedback-form"]["feedback-email"].value;
    let rateDesign = document.forms["feedback-form"]["feedback-design"].value;
    let rateComponents = document.forms["feedback-form"]["feedback-components"].value;
    let feedbackName = document.getElementById("feedback-name");
    let feedbackEmail = document.getElementById("feedback-email");
    let feedbackDesign = document.getElementById("feedback-design");
    let feedbackComponents = document.getElementById("feedback-components");

    // Check if name is valid
    if (!isValidName(name)) {
        valid = false;
        setBorderColor(RED, feedbackName);
    } else {
        setBorderColor(GREEN, feedbackName);
    }

    // Check if email is valid
    if (!isValidEmail(email)) {
        valid = false;
        setBorderColor(RED, feedbackEmail);
    } else {
        setBorderColor(GREEN, feedbackEmail);
    }

    // Check if rating design is valid
    if (!isValidRateDesign(rateDesign)) {
        valid = false;
        setBorderColor(RED, feedbackDesign);
    } else {
        setBorderColor(GREEN, feedbackDesign);
    }

    // Check if rating components is valid
    if (!isValidRateComponents(rateComponents)) {
        valid = false;
        setBorderColor(RED, feedbackComponents);
    } else {
        setBorderColor(GREEN, feedbackComponents);
    }

    return valid;
}

function isValidName(name) {
    const nameRegex = new RegExp(/^[a-zöäüéàè ]+$/, 'i');
    const MAX_LENGTH = 100;
    const MIN_LENGTH = 3;
    let errorBoxName = document.getElementById('error-box-name');

    if (name === "") {
        errorBoxName.classList.remove("hidden");
        errorBoxName.textContent = "Name has to be filled out!";
        return false;
    }
    if (name.length < MIN_LENGTH) {
        errorBoxName.classList.remove("hidden");
        errorBoxName.textContent = "Name too short (min 3 chars)!";
        return false;
    }
    if (name.length > MAX_LENGTH) {
        errorBoxName.classList.remove("hidden");
        errorBoxName.textContent = "Name too long (max 100 chars)!";
        return false;
    }
    if (!nameRegex.test(name)) {
        errorBoxName.classList.remove("hidden");
        errorBoxName.textContent = "Only letters allowed!";
        return false;
    }
    errorBoxName.classList.add("hidden");
    return true;
}

function isValidEmail(email) {
    /* Stack Overflow... Why matching email is hard. And why you might end up with crazy stuff */
    /* https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript?page=1&tab=trending#tab-top */
    /* used regex from https://www.regular-expressions.info/email.html */
    const emailRegex = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/, 'i');
    const MAX_LENGTH = 200;
    let errorBoxEmail = document.getElementById('error-box-email');

    if (email === "") {
        errorBoxEmail.classList.remove("hidden");
        errorBoxEmail.textContent = "E-Mail has to be filled out!";
        return false;
    }
    if (email.length > MAX_LENGTH) {
        errorBoxEmail.classList.remove("hidden");
        errorBoxEmail.textContent = "Email too long (max 200 chars)!";
        return false;
    }
    if (!emailRegex.test(email)) {
        errorBoxEmail.classList.remove("hidden");
        errorBoxEmail.textContent = "Email invalid!";
        return false;
    }
    errorBoxEmail.classList.add("hidden");
    return true;
}

function isValidRateDesign(rateDesign) {
    const MIN_RATE = 1;
    const MAX_RATE = 10;
    let errorBoxRateDesign = document.getElementById('error-box-rate-design');

    if (rateDesign === "") {
        errorBoxRateDesign.classList.remove("hidden");
        errorBoxRateDesign.textContent = "Rating has to be provided!";
        return false;
    }
    if (rateDesign < MIN_RATE) {
        errorBoxRateDesign.classList.remove("hidden");
        errorBoxRateDesign.textContent = "Rating too low (min 1)!";
        return false;
    }
    if (rateDesign > MAX_RATE) {
        errorBoxRateDesign.classList.remove("hidden");
        errorBoxRateDesign.textContent = "Rating too high (max 10)!";
        return false;
    }
    if (!Number.isInteger(Number(rateDesign))) {
        errorBoxRateDesign.classList.remove("hidden");
        errorBoxRateDesign.textContent = "Only integers allowed!";
        return false;
    }
    errorBoxRateDesign.classList.add("hidden");
    return true;
}

function isValidRateComponents(rateComponents) {
    const MIN_RATE = 1;
    const MAX_RATE = 10;
    let errorBoxRateComponents = document.getElementById('error-box-rate-components');

    if (rateComponents === "") {
        errorBoxRateComponents.classList.remove("hidden");
        errorBoxRateComponents.textContent = "Rating has to be provided!";
        return false;
    }
    if (rateComponents < MIN_RATE) {
        errorBoxRateComponents.classList.remove("hidden");
        errorBoxRateComponents.textContent = "Rating too low (min 1)!";
        return false;
    }
    if (rateComponents > MAX_RATE) {
        errorBoxRateComponents.classList.remove("hidden");
        errorBoxRateComponents.textContent = "Rating too high (max 10)!";
        return false;
    }
    if (!Number.isInteger(Number(rateComponents))) {
        errorBoxRateComponents.classList.remove("hidden");
        errorBoxRateComponents.textContent = "Only integers allowed!";
        return false;
    }
    errorBoxRateComponents.classList.add("hidden");
    return true;
}

function setBorderColor(color, inputForm) {
     inputForm.style.borderColor = color;
}
