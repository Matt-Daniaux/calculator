//Basic function for further call 

const mathOperation = {
    add(a,b) {
        return a + b 
    },
    subtract(a,b) {
        return a - b 
    },
    multiply(a,b) {
        return a * b 
    },
    divide(a,b) {
        return a / b 
    }
}

//function operate

function operate (a, b, operator) {
    if (operator === '+') {
        return mathOperation.add(a,b)
    } else if (operator === '-') {
        return mathOperation.subtract(a,b)
    }else if (operator === 'x') {
        return mathOperation.multiply(a,b)
    }else if (operator === '/') {
        return mathOperation.divide(a,b)
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
btnNumber[10] = btnAll[16]


//function that say if you tap that button it add that to display 
//If equal noting just add number else do like clear 

function addToDisplay() {
    for (let i = 0; i < btnNumber.length; i++) {
        btnNumber[i].addEventListener('click', () => {
            if(displayNumber[1] == 0) { 
                btnAll[16].disabled = false;                                     //if..else to choose if it's first or second number of operation 
                if (displayNumber[0] !== 0) {                                //Choose if add or concat number in chosen array index
                    display.textContent += btnNumber[i].textContent;
                    displayNumber[0] += btnNumber[i].textContent;

                        if (displayNumber[0].includes('.') === true) {      //disabled btn for decimal  
                            btnAll[16].disabled = true;
                        }

                } else {
                    display.textContent = btnNumber[i].textContent;
                    displayNumber[0] = btnNumber[i].textContent;

                    if (displayNumber[0].includes('.') === true) {       
                        btnAll[16].disabled = true;
                    }
                }

            } else {
                btnAll[16].disabled = false;  
                if (displayNumber[2] !== 0) {
                    btnAll[16].disabled = false                             

                    display.textContent += btnNumber[i].textContent;
                    displayNumber[2] += btnNumber[i].textContent;

                    if (displayNumber[2].includes('.') === true) {
                        btnAll[16].disabled = true;
                    }

                } else {
                    display.textContent = btnNumber[i].textContent;
                    displayNumber[2] = btnNumber[i].textContent;

                    if (displayNumber[2].includes('.') === true) {      
                        btnAll[16].disabled = true;
                    }
                }
            }
        }) 
    } 
};

//Same with keyEvent 
function keyboardShortCutAddToDisplay () {
    document.addEventListener('keydown', e => {
        let i = '';
        if (e.key === '1') {
            i = '1';
        } else if (e.key === '2') {
            i = '2'
        } else if (e.key === '3') {
            i = '3'
        } else if (e.key === '4') {
            i = '4'
        } else if (e.key === '5') {
            i = '5'
        } else if (e.key === '6') {
            i = '6'
        } else if (e.key === '7') {
            i = '7'
        } else if (e.key === '8') {
            i = '8'
        } else if (e.key === '9') {
            i = '9'
        } else if (e.key === '0') {
            i = '0'
        } else if (e.key === '.') {
            i = '.'
        } 

        if(i == '1' || '2'|| '3'|| '4'|| '5'|| '6'|| '7'|| '8'|| '9'|| '0'|| '.') {
            if(displayNumber[1] == 0) { 
                btnAll[16].disabled = false;                                     
                if (displayNumber[0] !== 0) {                                
                    display.textContent += i;
                    displayNumber[0] += i;

                        if (displayNumber[0].includes('.') === true) {      
                            btnAll[16].disabled = true;
                        }

                } else {
                    display.textContent = i;
                    displayNumber[0] = i;

                    if (displayNumber[0].includes('.') === true) {       
                        btnAll[16].disabled = true;
                    }
                }

            } else {
                btnAll[16].disabled = false;  
                if (displayNumber[2] !== 0) {
                    btnAll[16].disabled = false                             

                    display.textContent += i;
                    displayNumber[2] += i;

                    if (displayNumber[2].includes('.') === true) {
                        btnAll[16].disabled = true;
                    }

                } else {
                    display.textContent = i;
                    displayNumber[2] = i;

                    if (displayNumber[2].includes('.') === true) {      
                        btnAll[16].disabled = true;
                    }
                }
            }
        }
    });
};

//function that say if you tap that button it add that to display 
//If equal noting just add number else do like clear 




//Function that add displayNumber[1] (operator)  & displayNumber[0] (number)
const operatorBtn = [...btnAll].slice(10, 14);

function operatorToDisplayNumber() {
    for (let i = 0; i < operatorBtn.length; i++) {
        operatorBtn[i].addEventListener('click', () => {
                if (displayNumber[1] == 0) {
                    display.textContent = 0;
                    displayNumber[1] = operatorBtn[i].textContent;
                } else {
                    equal()
                    displayNumber[1] = operatorBtn[i].textContent;
                }
        })
    }
}
//document.addEventListener('keydown', e => { 
//    console.log(e)})

function operatorToDisplayNumberKeyShortCut() {
    document.addEventListener('keydown', e => { 
        if (e.key === '+') {
            if (displayNumber[1] == 0) {
                display.textContent = 0;
                displayNumber[1] = '+';
            } else {
                equal()
                displayNumber[1] = '+';
            }
        } else if (e.key === '-') {
            if (displayNumber[1] == 0) {
                display.textContent = 0;
                displayNumber[1] = '-';
            } else {
                equal()
                displayNumber[1] = '-';
            }
        } else if (e.key === '*') {
            if (displayNumber[1] == 0) {
                display.textContent = 0;
                displayNumber[1] = 'x';
            } else {
                equal()
                displayNumber[1] = 'x';
            }
        } else if (e.key === '/') {
            if (displayNumber[1] == 0) {
                display.textContent = 0;
                displayNumber[1] = '/';
            } else {
                equal()
                displayNumber[1] = '/';
            }
        }
    })
}




//fct that transfers displayNumber[0] & [2] with fitting operator
const equalBtn = btnAll[14];

function equal () {
    if (displayNumber[1] == '/' && displayNumber[2] == 0) {
        display.textContent = 'Can\'t do';
    } else {
        displayNumber[2] = display.textContent;
        displayNumber[3] = (1 * 
                                operate(
                                    parseFloat(displayNumber[0]),
                                    parseFloat(displayNumber[2]),
                                    displayNumber[1]
                                    ).toFixed(5))
        display.textContent = displayNumber[3];
    }

        displayNumber[2] = 0;
        displayNumber[1] = 0;
        displayNumber[0] = displayNumber[3];
}

function equalButton() {
    equalBtn.addEventListener('click', equal)
}
function equalKey() {
    document.addEventListener('keydown', e => {
        if(e.key === 'Enter') {
            equal()
        }
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


//Delete Btn
const deleteOneCharacterBtn = btnAll[17]

function deleteLastCharacter () {
    deleteOneCharacterBtn.addEventListener('click', () => {
        let displayDelete = '';
        let indexTwo = displayNumber[2] 

        displayDelete = display.textContent.slice(0,-1)

        if (indexTwo == 0) {
            displayNumber[0] = displayDelete
        } else {
            displayNumber[2] = displayDelete
        
        }
        
        display.textContent = displayDelete;
    })
}




function calculator () {
    addToDisplay()
    keyboardShortCutAddToDisplay()
    operatorToDisplayNumberKeyShortCut()

    operatorToDisplayNumber()

    clear()
    deleteLastCharacter()

    equalButton()
    equalKey()
}

calculator()

//to MYself


//CSS the shit out 
//Optimise the shit out 
