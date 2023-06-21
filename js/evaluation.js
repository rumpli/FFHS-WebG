async function fetchEvaluation() {
    const url = 'https://web-modules.dev/api/v1/feedback';
    try {
        const response = await fetch(url, {
            headers: {
                Authorization: bearer,
                Accept: 'application/json'
            },
            method: 'GET'
        });
        if (response.status === 404) {
            alert("Whooops, something went wrong! Please try again!");
        } else {
            return await response.json();
        }
    } catch (error) {
        alert("A fatal error occurred! Please try again and if the error persists contact us and send us the error message. Error : " + error);
    }
}

// draw the pie chart
function drawPie(ratings, pie, evaluations) {
    let currentAngle = 0;
    for (let rating of ratings) {
        let portionAngle = (rating.total / evaluations.amount) * 2 * Math.PI;
        pie.beginPath();
        pie.arc(150, 150, 150, currentAngle, currentAngle + portionAngle);
        currentAngle += portionAngle;
        pie.lineTo(150, 150);
        pie.fillStyle = rating.shade;
        pie.fill();
    }
}

// disable the evaluation button after use
function disableEvaluationButton() {
    document.getElementById('evaluation-feedback').disabled = true;
}

async function createEvaluation() {
    const evaluations = await fetchEvaluation();
    const width = 15;
    const height = 15;
    const colorRating1 = "#FF0000", colorRating2 = "#8871A0", colorRating3 = "#332E2E", colorRating4 = "#7CDDDD";
    const colorRating5 = "#007ED6", colorRating6 = "#F73809", colorRating7 = "#960A2C", colorRating8 = "#FFEC00";
    const colorRating9 = "#3F9F9F", colorRating10 = "#52D726";
    let rating1 = 0, rating2 = 0, rating3 = 0, rating4 = 0, rating5 = 0;
    let rating6 = 0, rating7 = 0, rating8 = 0, rating9 = 0, rating10 = 0;
    let container = document.querySelector('.container');

    container.classList.remove("hidden");
    evaluations.feedbacks.forEach(evaluation => {
        if (evaluation.rating_design === 1) {
            rating1++;
        }
        if (evaluation.rating_design === 2) {
            rating2++;
        }
        if (evaluation.rating_design === 3) {
            rating3++;
        }
        if (evaluation.rating_design === 4) {
            rating4++;
        }
        if (evaluation.rating_design === 5) {
            rating5++;
        }
        if (evaluation.rating_design === 6) {
            rating6++;
        }
        if (evaluation.rating_design === 7) {
            rating7++;
        }
        if (evaluation.rating_design === 8) {
            rating8++;
        }
        if (evaluation.rating_design === 9) {
            rating9++;
        }
        if (evaluation.rating_design === 10) {
            rating10++;
        }
    });

    const designRatings = [
        {rating: "1", total: rating1, shade: colorRating1},
        {rating: "2", total: rating2, shade: colorRating2},
        {rating: "3", total: rating3, shade: colorRating3},
        {rating: "4", total: rating4, shade: colorRating4},
        {rating: "5", total: rating5, shade: colorRating5},
        {rating: "6", total: rating6, shade: colorRating6},
        {rating: "7", total: rating7, shade: colorRating7},
        {rating: "8", total: rating8, shade: colorRating8},
        {rating: "9", total: rating9, shade: colorRating9},
        {rating: "10", total: rating10, shade: colorRating10}
    ];

    rating1 = rating2 = rating3 = rating4 = rating5 = rating6 = rating7 = rating8 = rating9 = rating10 = 0;
    evaluations.feedbacks.forEach(evaluation => {
        if (evaluation.rating_components === 1) {
            rating1++;
        }
        if (evaluation.rating_components === 2) {
            rating2++;
        }
        if (evaluation.rating_components === 3) {
            rating3++;
        }
        if (evaluation.rating_components === 4) {
            rating4++;
        }
        if (evaluation.rating_components === 5) {
            rating5++;
        }
        if (evaluation.rating_components === 6) {
            rating6++;
        }
        if (evaluation.rating_components === 7) {
            rating7++;
        }
        if (evaluation.rating_components === 8) {
            rating8++;
        }
        if (evaluation.rating_components === 9) {
            rating9++;
        }
        if (evaluation.rating_components === 10) {
            rating10++;
        }
    });

    const componentsRatings = [
        {rating: "1", total: rating1, shade: colorRating1},
        {rating: "2", total: rating2, shade: colorRating2},
        {rating: "3", total: rating3, shade: colorRating3},
        {rating: "4", total: rating4, shade: colorRating4},
        {rating: "5", total: rating5, shade: colorRating5},
        {rating: "6", total: rating6, shade: colorRating6},
        {rating: "7", total: rating7, shade: colorRating7},
        {rating: "8", total: rating8, shade: colorRating8},
        {rating: "9", total: rating9, shade: colorRating9},
        {rating: "10", total: rating10, shade: colorRating10}
    ];

    let htmlSegment = `
    <div class="color-index">
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating1)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating&nbsp;1&nbsp;</div>
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating2)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating&nbsp;2&nbsp;</div>
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating3)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating&nbsp;3&nbsp;</div>
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating4)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating&nbsp;4&nbsp;</div>
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating5)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating&nbsp;5&nbsp;</div>
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating6)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating&nbsp;6&nbsp;</div>
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating7)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating&nbsp;7&nbsp;</div>
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating8)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating&nbsp;8&nbsp;</div>
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating9)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating&nbsp;9&nbsp;</div>
        <div><svg width=${(width)} height=${(height)}><rect width=${(width)} height=${(height)} style="fill:${(colorRating10)};stroke-width:3;stroke:rgb(0,0,0)"/></svg>&nbsp;Rating10&nbsp;</div>
    </div>
    <canvas class="canvas" id="designCanvas" width="300" height="300"></canvas>
    <canvas class="canvas" id="componentsCanvas" width="300" height="300"></canvas>
    `;
    container.innerHTML += htmlSegment;

    let designPie = document.getElementById('designCanvas').getContext("2d");
    let componentsPie = document.getElementById('componentsCanvas').getContext("2d");

    drawPie(designRatings, designPie, evaluations);
    drawPie(componentsRatings, componentsPie, evaluations);
    disableEvaluationButton();
}


