
let displayNumber = 0;
let storedNumber = 0;
let storedOperand;


// Function to store number click as text in displayNumber
const viwerContent = document.querySelector('.viewer');

function updateDisplayNumber(newAddition) {
    displayNumber = Number(String(displayNumber) + (newAddition ? String(newAddition) : ''));
    viwerContent.textContent = Math.round(displayNumber*10)/10;
}



// Add updateDisplayNumber to all number buttons
const numberButtons = document.querySelectorAll('.numberButton');


numberButtons.forEach((numberButton) => {
    numberButton.addEventListener('mousedown', (e) => {
        updateDisplayNumber(e.toElement.textContent);
    })
});

// Store away displayNumber
function storeDisplay() {
    storedNumber = displayNumber;
    displayNumber = 0;
}

// Store away operand
function storeOperand(operator) {
    storeDisplay();
    storedOperand = operator;
}


// OPERATOR FUNCTIONS
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    if (b === 0)
    {return 'UNDF';}
    else
    {return a / b;}
}

function addDecimal(a,b) {
    return (Math.round(a*100+b*10) / 10)
}

function operate(operatorFunction, a, b) {
    return(operatorFunction(a,b));
}

// Equals sign
function equals(operatorFunction,a,b) {
    displayNumber = operate(operatorFunction, a, b);
    updateDisplayNumber();
    storedNumber = 0;
    storedOperand = null;
    
}

// CLEAR + DELETE

function clearScreen() {
    displayNumber = 0;
    storedOperand = null;
    updateDisplayNumber();
}

function deleteDigit() {
    displayNumber = Number(String(displayNumber).slice(0, String(displayNumber).length-1));
    updateDisplayNumber();
}
