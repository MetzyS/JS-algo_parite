// Create text input
let userInput = document.createElement("input");
userInput.setAttribute("type", "text");
userInput.setAttribute("value", "");
userInput.setAttribute("placeholder", "Entrez un nombre");
document.querySelector("main").appendChild(userInput);

// Create button
let submitButton = document.createElement("button");
submitButton.setAttribute("OnClick", "isEven()");
submitButton.appendChild(document.createTextNode("Ta-da!"));
document.querySelector("main").appendChild(submitButton);

function isEven() {
    console.log(userInput.value % 2 == 0);
}
