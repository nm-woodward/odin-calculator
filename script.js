
let displayNumber = 0;
let storedNumber = 0;
let storedOperand;


// Function to store number click as text in displayNumber
const viwerContent = document.querySelector('.viewer');

function updateDisplayNumber(newAddition) {
    displayNumber = Number(String(displayNumber) + String(newAddition));
    viwerContent.textContent = displayNumber;
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