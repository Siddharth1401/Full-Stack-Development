let btn = document.querySelector("button");
let div = document.querySelector("div");

function getRandomValue() {
    return Math.random() * 225;
}

function colorChange() {
    let value1 = getRandomValue();
    let value2 = getRandomValue();
    let value3 = getRandomValue();

    div.style.backgroundColor = `rgb(${value1}, ${value2}, ${value3})`;
}

btn.addEventListener("click", colorChange);
