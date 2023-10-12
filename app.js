let total = null;
let firstValue = null;
let secondValue = null;
let currentValue = null;
let operation = null;

let buttons = document.querySelectorAll('.button');

let totalDisplay = document.querySelector('.display');
totalDisplay.innerText = 0;

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (ev) => {
    // store the value of the button being clicked in currentValue
    currentValue = ev.currentTarget.innerText;
    if (currentValue === "Clear") {
      total = null;
      firstValue = null;
      secondValue = null;
      currentValue = null;
      operation = null;
    }
    
    if (total !== null) {
      firstValue = total;
    }

    if (firstValue === null) {
      firstValue = Number(currentValue);
      totalDisplay.innerText = firstValue;
    } else if (operation === null) {
      operation = currentValue;
    } else if (secondValue === null) {
      secondValue = Number(currentValue);
      totalDisplay.innerText = secondValue;
    } else if (currentValue === "=") {
      if (operation === "+") {
        total = firstValue + secondValue;  
      } else if (operation === "-") {
        total = firstValue - secondValue;
      } else if (operation === "*") {
        total = firstValue * secondValue;
      } else if (operation === "/") {
        total = firstValue / secondValue;
      }
      totalDisplay.innerText = total;
      currentValue = null;
      firstValue = null;
      operation = null;
      secondValue = null;
    } else {

    }
    console.log('this is the firstValue:', firstValue);
    console.log('this is the operation:', operation);
    console.log('this is the secondValue', secondValue);
    console.log('this is the total:', total);
  });
}