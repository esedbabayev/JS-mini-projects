const rightBtn = document.getElementById("right__btn");
const leftBtn = document.getElementById("left__btn");

let counter = 0;
rightBtn.addEventListener("click", () => {
    if(counter < 6) {
        counter++
    } else {
        counter = 0
    }

    document.querySelector(".slider").style.transform = `translateX(${-counter*310}px)`;
});
leftBtn.addEventListener("click", () => {
    if (counter > 6) {
        counter--
    } else {
        counter = 6
    }
    document.querySelector(".slider").style.transform = `translateX(${-counter*310}px)`;
});