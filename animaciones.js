const button = document.querySelector("button");
const label = document.querySelector("label");
button.addEventListener("click", () => label.toggleAttribute("open"));