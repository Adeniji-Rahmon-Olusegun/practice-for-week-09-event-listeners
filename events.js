// Your code here
window.addEventListener("DOMContentLoaded", event => {
    document.body.innerHTML += "<h3>Yeah!!! DOM loaded!<h3>";

    const mrInput = document.getElementById("red-input");
    mrInput.addEventListener("input", event => {
        if (event.target.value.toLowerCase() === "red") {
            mrInput.className = "m-red"
        }
    });

    const listInput = document.getElementById("list-add");
    
    let item = "";
    
    listInput.addEventListener("input", event => {
        item = event.target.value;
    });

    const button = document.getElementById("add-item");
    button.addEventListener("click", event => {
        document.getElementById("list-items").innerHTML += `<li>${item}</li>`;
    });

    const colorSelect = document.getElementById("color-select");
    let color = "";
    colorSelect.addEventListener("input", event => {
        color = event.target.value;
        console.log(color);
        document.getElementById("section-3").style.backgroundColor = color;
    });

    const keyDown = function (event) {
        if (event.code === "Space") alert("Space bar pressed!!!");
    }

    document.addEventListener("keydown", keyDown);

    setTimeout(() => {
        document.removeEventListener("keydown", keyDown);
        console.log("event removed")
    }, 10000);
});

