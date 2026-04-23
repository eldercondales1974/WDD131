const buttonElement = document.getElementById("submitButton");
function copyInput(event) {
    console.log(event);
    const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);

const log = document.querySelector("#log");
document.addEventListener("keydown", logkey);
function logkey(e) {
    console.log(e);
}