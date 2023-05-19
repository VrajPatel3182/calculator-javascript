const defaultResults = 0;
let currentResults = defaultResults;
let logEntries = [];

//Gets input from input fields
function getUserInput(){
  return parseInt(userInput.value);
}

//Generates and writes calculation logs
function createAndWriteLog(operator,resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResults,calcDescription);//from vender file
}

function add(){
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults += enteredNumber;
  createAndWriteLog('+', initialResult, enteredNumber);
  const logEntry = {
    operators: 'ADD',
    number: enteredNumber,
    result: currentResults
  };
  logEntries.push(logEntry);
  //logEntries.push(logEntry.operators); to access the objects value from object
  console.log(logEntries);
}

function subtract(){
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults -= enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
}

function multiply(){
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults *= enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
}

function divide(){
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults /= enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

