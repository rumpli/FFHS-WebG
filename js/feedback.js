const date = new Date();

async function postFeedback() {
    let name = document.forms["feedback-form"]["feedback-name"].value;
    let email = document.forms["feedback-form"]["feedback-email"].value;
    let rateDesign = document.forms["feedback-form"]["feedback-design"].value;
    let rateComponents = document.forms["feedback-form"]["feedback-components"].value;
    let comment = document.forms["feedback-form"]["feedback-comment"].value;
    let body = 'name=' + name + '&email=' + email + '&rating_design=' + rateDesign + '&rating_components=' + rateComponents;

    // if comment field is not empty, add it to the body
    if (comment.length !== 0) {
        body += '&comment=' + comment;
    }

    const url = 'https://web-modules.dev/api/v1/feedback';
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: bearer,
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            body: body
        });
        if (response.status === 404) {
            alert("Whooops, something went wrong! Please try again!");
        } else {
            await response.json();
        }
        // set cookie and prevent user to send another Feedback within 24h
        setCookie('feedback', 'provided', 1);
    } catch (error) {
        alert("A fatal error occurred while sending the feedback. Please try again and if the error persists contact us and send us the error message. Error : " + error);
    }
}

// convert miliseconds to time (https://bobbyhadz.com/blog/javascript-convert-milliseconds-to-hours-minutes-seconds)
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds,)}`;
}

// disable feedback and show users how long he has to wait until he can submit another one
function disableFeedback() {
    if (checkCookie('feedback')) {
        let container = document.getElementById('feedback-form');
        container.innerHTML = `<div id="error-box-feedback-provided" class="error-box"></div>`;
        return true;
    }
}

function updateFeedbackTime() {
    let errorBox = document.getElementById('error-box-feedback-provided');
    date.setTime(Date.parse(getCookie('feedback_expiry')));
    let expiryDate = date.toUTCString();
    date.setTime(Date.now());
    let currentDate = date.toUTCString();
    let expires = convertMsToTime(Date.parse(expiryDate) - Date.parse(currentDate));

    errorBox.setAttribute('style', 'white-space: pre;');
    errorBox.textContent = "Please wait\r\n" + expires + "\r\nbefore submitting another feedback!";
}

// if feedback is disabled, update timer
if (disableFeedback()) {
    setInterval(updateFeedbackTime,1000);
}