const defaultResults = 0;
let currentResults = defaultResults;

function add(num1, num2){
  currentResults = currentResults + userInput.value;
  outputResult(currentResults, '');
}

addBtn.addEventListener('click', add);

