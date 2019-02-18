const inputString = process.argv;
const command = inputString[2];
const num1 = parseInt(inputString[3]);
const num2 = parseInt(inputString[4]);
let result;

addition=(num1, num2)=> {
  result = num1 + num2  

    return  result
}

subtraction= (num1, num2)=> {
    result = num1 - num2
    return result
}
division =(num1, num2) => {
    result = num1 / num2
    return result
}
multiplication = (num1, num2) =>{
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



