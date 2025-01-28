function createDivs(n) {
    let container = document.querySelector('#container');
    let div;
    for (let i = 0; i < n; i++) {
        div = document.createElement("div");
        div.style.width = `${setDivWidth(n)}%`;
        div.style.height = `${setDivHeight(n)}px`;
        div.addEventListener("mouseover", function(e) {
            e.target.classList.add("hovered-div");
        });
        container.appendChild(div);
    };
};

createDivs(256);

function setDivWidth(n) {
    let width = 100 / Math.sqrt(n);
    return width;
}

function setDivHeight(n) {
    let height = 960 / Math.sqrt(n);
    return height;
}