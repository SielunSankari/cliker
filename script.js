let money = 0
const count = document.getElementById("count")
const button = document.getElementById("osu")

function clickBatyr() {
    money++
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    button.style.backgroundColor = "#" + randomColor;

    count.textContent = money
}

