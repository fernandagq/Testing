var inputString = process.argv;


var command = inputString[2];
var num1 = parseInt(inputString[3]);
var num2 = parseInt(inputString[4]);
var result;

function addition(num1, num2) {
  result = num1 + num2  
  return  result
}

function subtraction(num1, num2) {
    result = num1 - num2
    return result
}
function division(num1, num2) {
    result = num1 / num2
    return result
}
function multiplication(num1, num2) {
    result = num1 * num2;
    return result
}

switch (command) {
    case "add":
        addition(num1, num2);
        break;

    case "multiply":
        multiplication(num1, num2);
        break;

    case "subtract":
        subtraction(num1, num2);
        break;

    case "divide":
        division(num1, num2);
        break;
}

exports.addition = addition
exports.multiplication = multiplication
exports.division = division
exports.subtraction = subtraction
console.log(result);



