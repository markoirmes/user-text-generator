const howMany = document.getElementById("howMany");
const output = document.getElementById("output");
const userInputText = document.getElementById("userText");

function generate() {
  output.innerHTML = "";
  for (let i = 0; i < howMany.value; i++) {
    const createParagraphElement = document.createElement("p");
    const createParagraphText = document.createTextNode(
      `${userInputText.value}`
    );
    createParagraphElement.appendChild(createParagraphText);
    output.appendChild(createParagraphElement);
  }
}

/* CLEAR ALL GENERATED ITEMS */
function reset() {
  output.innerHTML = "";
  howMany.value = "";
  userInputText.value = "";
}
