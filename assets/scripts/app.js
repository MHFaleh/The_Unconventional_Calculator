const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function addedValue() {
    return parseInt(userInput.value);
}
function calcOutput(resultBeforeCalc, operator, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}
function addToLog(opId, oldResult, newInput, newResult) {
    const logEntry = {
        operation: opId,
        prevResult: oldResult,
        userNumber: newInput,
        opResult: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}
function calculatingResult(mathCmd) {
    const resultBeforeCalc = currentResult
    const calcNumber = addedValue();
    let printedOp = 0
    if (mathCmd === "add") {
        currentResult += calcNumber;
        printedOp = "+";
    } else if (mathCmd === "subtract") {
        currentResult -= calcNumber;
        printedOp = "-";
    } else if (mathCmd === "multiply") {
        currentResult *= calcNumber;
        printedOp = "*";
    } else if (mathCmd === "divide") {
        currentResult /= calcNumber;
        printedOp = "/";
    }
    calcOutput(resultBeforeCalc, printedOp, calcNumber);
    addToLog(mathCmd, resultBeforeCalc, calcNumber, currentResult)
} 
function add() {
    calculatingResult("add")
}
addBtn.addEventListener("click", add);
function subtract() {
    calculatingResult("subtract")
}
subtractBtn.addEventListener("click", subtract);
function multiply() {
    calculatingResult("multiply")
}
multiplyBtn.addEventListener("click", multiply);
function divide() {
    calculatingResult("divide")
}
divideBtn.addEventListener("click", divide);