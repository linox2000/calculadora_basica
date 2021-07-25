const defaultResult = 0;
let result = defaultResult;

function getUserInputNumber() {
  return +userInput.value;
}

function calculator(operator) {
    const enteredNumber = getUserInputNumber();
    if(!enteredNumber)return;
  if (operator === "ADD") {
    const initialResult = result;
    result += enteredNumber;
    createAndWriteoutput("+", initialResult, enteredNumber);
  } else if (operator === "SUB") {
    const initialResult = result;
    result -= enteredNumber;
    createAndWriteoutput("-", initialResult, enteredNumber);
  } else if (operator === "MULT") {
    const initialResult = result;
    result *= enteredNumber;
    createAndWriteoutput("*", initialResult, enteredNumber);
  } else {
    const initialResult = result;
    result /= enteredNumber;
    createAndWriteoutput("/", initialResult, enteredNumber);
  }
}

function createAndWriteoutput(operator, initialResult, enteredNumber) {
  const description = `${initialResult} ${operator} ${enteredNumber}`;
  outputResult(result, description);
}
function add() {
  calculator("ADD");
}
function sub() {
    calculator("SUB");
}
function mult() {
    calculator("MULT");
}
function div() {
    calculator("DIV");
}
btnAdd.addEventListener("click", add);
btnSub.addEventListener("click", sub);
btnMult.addEventListener("click", mult);
btndiv.addEventListener("click", div);
