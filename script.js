let button_arrow = document.getElementById("button_arrow");

button_arrow.onclick = function () {
    let div = document.getElementById("information");
    if (div.style.display !== "block") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
};
