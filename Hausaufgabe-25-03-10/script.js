let items = [];

function renderList() {
    document.getElementById("liste").innerHTML = items.map(item => `<div>${item}</div>`).join("");
}

function setUserInputList() {
    let input = document.getElementById("userInput").value;
    if (input.trim()) {
        items = items.concat(input.split(",").map(item => item.trim()).filter(item => item));
        document.getElementById("userInput").value = "";
        renderList();
    }
}

function addSingleItem() {
    let input = document.getElementById("singleInput").value.trim();
    if (input) {
        items.push(input);
        document.getElementById("singleInput").value = "";
        renderList();
    }
}

function removeLastItem() {
    if (items.length > 0) {
        items.pop();
        renderList();
    }
}