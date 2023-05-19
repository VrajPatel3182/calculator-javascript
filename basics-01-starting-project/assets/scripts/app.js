const defaultResults = 0;
let currentResults = defaultResults;

function getUserInput(){
  return parseInt(userInput.value);
}

function createAndWriteLog(operator,resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResults,calcDescription);
}

function add(){
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults = currentResults + enteredNumber;
  createAndWriteLog('+', initialResult, enteredNumber);
}

function subtract(){
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults = currentResults - enteredNumber;
  createAndWriteLog('-', initialResult, enteredNumber);
}

function multiply(){
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults = currentResults * enteredNumber;
  createAndWriteLog('*', initialResult, enteredNumber);
}

function divide(){
  const enteredNumber = getUserInput();
  const initialResult = currentResults;
  currentResults = currentResults / enteredNumber;
  createAndWriteLog('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

