//Basic function for further call 

function add (a,b) {
    return a + b 
}

function subtract (a,b) {
    return a - b 
}

function multiply (a,b) {
    return a * b 
}

function divide (a,b) {
    return a / b 
}


//function operate

function operate (a, b, operator) {
    if (operator === '+') {
        return add(a,b)
    } else if (operator === '-') {
        return subtract(a,b)
    }else if (operator === 'x') {
        return multiply(a,b)
    }else if (operator === '/') {
        return divide(a,b)
    } else {
        return a
    }
}



//Make the display work when click 
let displayNumber = [0,0,0,0];

const display = document.querySelector('.display');
display.textContent = displayNumber[0];

const btnAll = document.querySelectorAll('.main-button');
const btnNumber = [...btnAll].slice(0, 10);


//function that say if you tap that button it add that to display 
//If equal noting just add number else do like clear 

function addToDisplay() {
    for (let i = 0; i < btnNumber.length; i++) {
        btnNumber[i].addEventListener('click', () => {
            if(displayNumber[1] == 0) {
                if (displayNumber[0] !== 0) {
                    display.textContent += btnNumber[i].textContent;
                    displayNumber[0] += btnNumber[i].textContent;
                } else {
                    display.textContent = btnNumber[i].textContent;
                    displayNumber[0] = btnNumber[i].textContent;
                }
            } else {
                if (displayNumber[2] !== 0) {
                    display.textContent += btnNumber[i].textContent;
                    displayNumber[2] += btnNumber[i].textContent;
                } else {
                    display.textContent = btnNumber[i].textContent;
                    displayNumber[2] = btnNumber[i].textContent;
                }
            }
        }) 
    } 
};



//Function that add displayNumber[1] (operator)  & displayNumber[0] (number)
const operatorBtn = [...btnAll].slice(10, 14);

function operatorToDisplayNumber() {
    for (let i = 0; i < operatorBtn.length; i++) {
        operatorBtn[i].addEventListener('click', () => {
            display.textContent = 0;
            displayNumber[1] = operatorBtn[i].textContent;
        })
    }
}



//fct that transfers displayNumber[0] & [2] with fitting operator
const equalBtn = btnAll[14];

function equal () {
    equalBtn.addEventListener('click', () => {
        displayNumber[2] = display.textContent;
        displayNumber[3] = operate(
                                    parseInt(displayNumber[0]),
                                    parseInt(displayNumber[2]),
                                    displayNumber[1]
                                    )
        display.textContent = displayNumber[3];
        displayNumber[2] = 0;
        displayNumber[1] = 0;
        displayNumber[0] = displayNumber[3];

    })
}

//Clear btn
const clearBtn = btnAll[15];

function clear () {
    clearBtn.addEventListener('click', () => {
        displayNumber = [0,0,0,0];
        display.textContent = 0;
    })
}


addToDisplay()
operatorToDisplayNumber()
equal()
clear()

