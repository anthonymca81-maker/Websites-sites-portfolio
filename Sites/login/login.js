
const studentName = document.getElementById("studentName");
const studentImage = document.getElementById("studentImage");
const nameInput = document.getElementById("nameInput");
const yearSelect = document.getElementById("yearSelect");

const clickBtn = document.getElementById("clickBtn");
const dblClickBtn = document.getElementById("dblClickBtn");
const changeImageBtn = document.getElementById("changeImageBtn");
const pressBtn = document.getElementById("pressBtn");

const statusText = document.getElementById("status");

clickBtn.addEventListener("click", function () {

    studentName.innerHTML = "Future Web Developer";
    statusText.innerHTML = "Click activated.";

});



dblClickBtn.addEventListener("dblclick", function () {

    studentName.style.color = "purple";
    statusText.innerHTML = "Double-click Activated.";

});




studentImage.addEventListener("mouseover", function () {

    studentImage.style.transform = "scale(1.1)";
    statusText.innerHTML = "Need Some Attention?.";

});




studentImage.addEventListener("mouseout", function () {

    studentImage.style.transform = "scale(1)";
    statusText.innerHTML = "Ohh... NerverMind.";

});



pressBtn.addEventListener("mousedown", function () {

    pressBtn.style.backgroundColor = "purple";
    pressBtn.style.transform = "scale(0.95)";
    statusText.innerHTML = "Keep pressing....";

});




pressBtn.addEventListener("mouseup", function () {

    pressBtn.style.backgroundColor = "violet";
    pressBtn.style.transform = "scale(1)";
    statusText.innerHTML = "Why did you let go?";

});




nameInput.addEventListener("focus", function () {

    nameInput.style.backgroundColor = "lightpurple";
    statusText.innerHTML = "Input anything....";

});




nameInput.addEventListener("blur", function () {

    nameInput.style.backgroundColor = "white";
    statusText.innerHTML = "is that your name?";

});




yearSelect.addEventListener("change", function () {

    statusText.innerHTML = "Year selected: " + yearSelect.value;

});




nameInput.addEventListener("input", function () {

    studentName.innerHTML = nameInput.value || "Cast";
    statusText.innerHTML = "Typing...";

});

