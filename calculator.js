
const num1 = 0;
const num2 = 0;
const op = "";

function operate(op, num1, num2) {
    
    if ( op === "+" ) {

        return add(num1, num2);

    } else if ( op === "-" ) {

        return subtract(num1, num2);

    } else if ( op === "/" ) {

        return divide(num1, num2);

    } else if ( op === "*" ) {

        return multiply(num1, num2);
    }
}

function add(num1, num2) {

    return num1 + num2;
}

function subtract(num1, num2) {

    return num1 - num2;
}

function divide(num1, num2) {

    return num1 / num2
}

function multiply(num1, num2) {

    return num1 * num2;
}