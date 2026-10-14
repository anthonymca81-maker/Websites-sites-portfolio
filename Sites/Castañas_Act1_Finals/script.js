
const raidenei = document.getElementById("raidenei");
const nameInput = document.getElementById("nameInput");
const selection = document.getElementById("selection");
const clickBtn = document.getElementById("clickBtn");
const dblClickBtn = document.getElementById("dblClickBtn");
const changeImageBtn = document.getElementById("changeImageBtn");
const pressBtn = document.getElementById("pressBtn");
const statusText = document.getElementById("status");

clickBtn.addEventListener(
    "click", function () {
    raidenei.innerHTML = "Future editor";
    statusText.innerHTML = "Do you need me?.";
});


dblClickBtn.addEventListener(
    "dblclick", function () {
    raidenei.style.color = "Lightblue";
    statusText.innerHTML = "Welcome What Do you Need?.";
});


raidenei.addEventListener(
    "mouseover", function () {
    raidenei.style.transform = "scale(0.9)";
    statusText.innerHTML = "Do you need Something?";
});


raidenei.addEventListener(
    "mouseout", function () {
    raidenei.style.transform = "scale(1)";
    statusText.innerHTML = "Ohh.. Okay.";
});


pressBtn.addEventListener(
    "mousedown", function () {
    pressBtn.style.backgroundColor = "Lightgreen";
    pressBtn.style.transform = "scale(0.95)";
    statusText.innerHTML = "Nice Idea!.";
});

pressBtn.addEventListener(
    "mouseup", function () {
    pressBtn.style.backgroundColor = "#89fff5";
    pressBtn.style.transform = "scale(1)";
    statusText.innerHTML = "Thank you!.";
});

nameInput.addEventListener(
    "focus", function () {
    nameInput.style.backgroundColor = "lightred";
    statusText.innerHTML = "Try to put something.";
});


nameInput.addEventListener(
    "blur", function () {
    nameInput.style.backgroundColor = "white";
    statusText.innerHTML = "Deactivated.";
});


yearSelect.addEventListener(
    "change", function () {
    statusText.innerHTML = "Year selected: " + selection.value;
});


nameInput.addEventListener(
    "input", function () {
    raidenei.innerHTML = nameInput.value || "Riden ei";
    statusText.innerHTML = "Typing...";
});

