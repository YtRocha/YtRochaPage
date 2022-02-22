let button_arrow = document.getElementById("button_arrow");

button_arrow.onclick = function () {
    let div = document.getElementById("information");
    let text = document.getElementById("text_unlocknw");
    if (div.style.display !== "block") {
        div.style.display = "block";
        text.style.display = "none";
        button_arrow.style.display = "none";
    } else {
        div.style.display = "none";
    }
};
