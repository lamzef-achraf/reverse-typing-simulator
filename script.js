const input = document.getElementById("userInput");
const output = document.getElementById("output");

input.addEventListener("input", () => {
  const reversed = input.value.split("").reverse().join("");
  output.textContent = reversed;
});

function copyText() {
  const tempInput = document.createElement("input");
  tempInput.value = output.textContent;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);
  alert("Reversed text copied!");
}