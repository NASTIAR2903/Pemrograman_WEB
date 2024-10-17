const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      try {
        display.innerText = evaluateExpression(display.innerText);
      } catch {
        display.innerText = "Error!";
        setTimeout(() => (display.innerText = ""), 2000);
      }
    } else if (display.innerText == "" && item.id == "equal") {
      display.innerText = "Yo Mbok Diisi Sek!";
      setTimeout(() => (display.innerText = ""), 2000);
    } else {
      display.innerText += item.id;
    }
  };
});

// Fungsi evaluasi ekspresi dengan dukungan operator ^ dan %
function evaluateExpression(expression) {
  expression = expression.replace("^", "**"); // Pangkat
  return eval(expression);
}


