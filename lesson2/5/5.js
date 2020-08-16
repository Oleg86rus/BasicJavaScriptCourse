'use strict';
function addition(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function division(a, b) {
    return a / b;
}
function multiplication(a, b) {
    return a * b;
}
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "plus":
            return addition(arg1, arg2);
        case "minus":
            return subtraction(arg1, arg2);
        case "delit":
            return division(arg1, arg2);
        case "umnoshit":
            return multiplication(arg1, arg2);
    }
}
console.log(mathOperation(3, 5, "+"));
console.log(mathOperation(3, 5, "-"));
console.log(mathOperation(3, 5, "/"));
console.log(mathOperation(3, 5, "*"));