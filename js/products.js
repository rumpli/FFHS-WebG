const bearer = 'Bearer 134|Tc97qDIdCUnFSFvwRwDKd179wt7JDuSWi2nQfHtg';

// replace numbers with Text
function replaceNumbers(name) {
    name = name.replace('0', 'Null');
    name = name.replace('1', 'One');
    name = name.replace('2', 'Two');
    name = name.replace('3', 'Three');
    name = name.replace('4', 'Four');
    name = name.replace('5', 'Five');
    name = name.replace('6', 'Six');
    name = name.replace('7', 'Seven');
    name = name.replace('8', 'Eight');
    name = name.replace('9', 'Nine');
    return name;
}

// fetch all gaming products
async function fetchProducts() {
    const url = 'https://web-modules.dev/api/v1/products/byCategory/3';
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: bearer,
                Accept: 'application/json'
            },
            method: 'GET',
        });
        if (response.status === 404) {
            alert("Products not found. Please refresh the page - if the error persists, please contact us");
        }
        return await response.json();
    } catch (error) {
        alert("A fatal error occurred. Please try again and if the error persists send us the error message. Error: " + error);
    }
}

// fetch current Bitcoin price
async function fetchBitcoinPrice() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
    try {
        const response = await fetch(url, {
            headers: {
                Accept: 'application/json'
            },
            method: 'GET',
        });
        if (response.status === 404) {
            alert("Actual Bitcoin price not found. Please refresh the page - if the error persists, please contact us");
        }
        return await response.json();
    } catch (error) {
        alert("An fatal error occurred while fetching the actual Bitcoin price. Please send us the error message. Error: " + error);
    }
}

// render products
async function renderProducts() {
    const regex = new RegExp("(\\s|-|[0-9])", "g");
    let container = document.querySelector('.wrap-order-section');
    try {
        const products = await fetchProducts();
        const price = await fetchBitcoinPrice();
        products.products.forEach(id => {
            id.sanitizedName = replaceNumbers(id.name);
            const priceInBTC = (parseInt(price.bpi.USD.rate) / parseInt(id.price)).toFixed(5);
            let htmlSegment = `
              <article>
                <div class="wrap-article">
                  <img id="${(id.sanitizedName).replace(regex, "")}Img" src="${(id.image)}" alt="${(id.sanitizedName)}" onclick="openModal('${(id.name)}', '${(id.sanitizedName).replace(regex, "")}');">
                    <div id="${(id.sanitizedName).replace(regex, "")}Modal" class="modal">
                        <span id="${(id.sanitizedName).replace(regex, "")}Close" class="close" onclick="closeModal('${(id.sanitizedName).replace(regex, "")}');">&times;</span>
                        <img id="${(id.sanitizedName).replace(regex, "")}ModalImg" class="modal-content" src="${(id.image)}" alt="">
                        <div id="${(id.sanitizedName).replace(regex, "")}Caption" class="modal-caption"></div>
                    </div>
                  <div class="wrap-article-name">
                    <h3>${(id.name)}</h3>
                    <h5 id="${(id.sanitizedName).replace(regex, "")}Likes">
                    <button onclick="like('${(id.sanitizedName).replace(regex, "")}', ${(id.id)}, ${(id.likes_count)});"
                    id="${(id.sanitizedName).replace(regex, "")}Like"
                    title="${(id.sanitizedName)} Like"><i class="fa-regular fa-thumbs-up"></i>
                    </button>${(id.likes_count)} Likes</h5>
                  </div>
                </div>
                <div class="wrap-article-description">
                  <br>
                  <h5><i class="fa-solid fa-heart"></i> ${(id.description)}<br></h5>
                  <br>
                  <div class="wrap-article-cost">
                    <h5><i class="fa fa-dollar"></i> ${JSON.stringify(id.price)}</h5>
                    <h5><i class="fa fa-bitcoin"></i> ${priceInBTC}</h5>
                    <button onclick="" id="cartButtonStandard" title="Add ${(id.sanitizedName)} to shopping cart">
                      <i class="fa-solid fa-cart-arrow-down"></i></button>
                  </div>
                </div>
              </article>`;
            container.innerHTML += htmlSegment;
            disableLikes(id.sanitizedName.replace(regex, ""));
        });
    } catch (error) {
        console.log(error);
    }
}

// open modal image
function openModal(originalName, name) {
    let modal = document.getElementById(name + "Modal");
    let captionText = document.getElementById(name + "Caption");
    modal.style.display = "block";
    captionText.innerHTML = originalName;
}

// close modal
function closeModal(name) {
    let modal = document.getElementById(name + "Modal");
    modal.style.display = "none";
}

renderProducts();
