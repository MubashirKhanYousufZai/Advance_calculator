import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Devision", "Percentage", "Exponention"],
    },
]);
console.log(answer);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Devision") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Percentage") {
    console.log(answer.firstNumber / answer.secondNumber * 100);
}
else if (answer.operator === "Exponention") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else
    ("please select a valid operator");
