let display = document.getElementById("display");

function appendValue(value) {
  if (display.innerText === "0" || display.innerText === "Please enter denominator greater than 0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function clearDisplay() {
  display.innerText = "0";
}

function calculate() {
  try {
    const expression = display.innerText;

    if (expression.includes("/0")) {
      throw "Math's Error";
    }

    display.innerText = eval(expression);
  } catch (error) {
    display.innerText = error;
  }
}
