async function like(name, id, likes_count) {
    const url = 'https://web-modules.dev/api/v1/like';
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: bearer,
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            method: 'POST',
            body: 'type=product&id=' + id
        });
        if (response.status === 404) {
            alert("Whooops, something went wrong! Please try again!");
        } else {
            await response.json();
            updateLikes(name, likes_count);
            disableButton(name);
            // set a cookie with an expiry in 365 days
            setCookie(name, 'liked', 365);
        }
    } catch (error) {
        alert("A fatal error occurred! Please try again and if the error persists contact us and send us the error message. Error : " + error);
    }
}

function updateLikes(name, likes_count) {
    let content = document.querySelector("#" + name + "Likes");
    let oldCount = likes_count + ' Likes';
    let newCount = (likes_count + 1) + ' Likes';
    content.innerHTML = content.innerHTML.replace(oldCount, newCount);
}

// disable like button if cookie is found
function disableLikes(name) {
    if (checkCookie(name)) {
        document.getElementById(name + 'Like').disabled = true;
    }
}

function disableButton(name) {
    document.getElementById(name + 'Like').disabled = true;
}
