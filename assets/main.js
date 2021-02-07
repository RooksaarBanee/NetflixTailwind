// right -> Event listener //

function rightScroll(scroll, rightArrow) {
    const carousel = document.querySelector(scroll);

    const right = document.querySelector(rightArrow);

    right.addEventListener("click", () => {
        carousel.scrollLeft +=carousel.offsetWidth;   
    });
}

// left -> Event listener //

function leftScroll(scroll, leftArrow) {
    const carousel = document.querySelector(scroll);

    const left = document.querySelector(leftArrow);

    left.addEventListener("click", () => {
        carousel.scrollLeft -=carousel.offsetWidth;
    });
}
