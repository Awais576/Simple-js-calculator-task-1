let display = document.getElementById("display");

function appendValue(value) {
  const currentDisplay = display.innerText;

  // Prevent multiple decimal points in the same number
  if (value === "." && currentDisplay.slice(-1) === ".") {
    return;
  }

  // Replace "0" or error messages with the new value
  if (currentDisplay === "0" || currentDisplay === "Cannot divide by zero." || currentDisplay === "Invalid expression.") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

//function to clear calculator display
function clearDisplay() {
  display.innerText = "0";
}

function isValidExpression(expression) {
  // Regular expression to check for invalid sequences
  const invalidPatterns = /(\+{2,}|\-{2,}|\*{2,}|\/{2,}|[+\-*/]{2,})/;
  return !invalidPatterns.test(expression);
}

//function to perform arithmetic operations
function calculate() {
  try {
    const expression = display.innerText;

    // Validate the input expression
    if (!isValidExpression(expression)) {
      throw "Invalid expression.";
    }

    // Check for division by zero
    if (expression.includes("/0")) {
      throw "Cannot divide by zero.";
    }

    // Attempt to evaluate the expression
    const result = eval(expression);

    // Check for undefined or NaN results
    if (isNaN(result) || result === undefined) {
      throw "Invalid calculation.";
    }

    // Display the result
    display.innerText = result;
  } catch (error) {
    // Show specific error messages
    display.innerText = error || "Syntax Error";
  }
}

