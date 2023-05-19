const defaultResults = 0;
let currentResults = defaultResults;
let logEntries = [];

//Gets input from input fields
function getUserInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculation logs
function createAndWriteLog(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResults, calcDescription); //from vender file
}

function writeToLogs(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operators: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  //logEntries.push(logEntry.operators); to access the objects value from object
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults += enteredNumber;
  createAndWriteLog("+", initialResult, enteredNumber);
  writeToLogs('ADD', initialResult, enteredNumber, currentResults);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults -= enteredNumber;
  createAndWriteLog("-", initialResult, enteredNumber);
  writeToLogs('SUBTRACT', initialResult, enteredNumber, currentResults);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults *= enteredNumber;
  createAndWriteLog("*", initialResult, enteredNumber);
  writeToLogs('MULTIPLY', initialResult, enteredNumber, currentResults);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults /= enteredNumber;
  createAndWriteLog("/", initialResult, enteredNumber);
  writeToLogs('DIVIDE', initialResult, enteredNumber, currentResults);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
