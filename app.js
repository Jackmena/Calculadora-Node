const inquirer = require("inquirer");

var cal = [
  {
    name: "firstNum",
    type: "input",
    message: "Digite o primeiro número:",
  },
  {
    name: "secondNum",
    type: "input",
    message: "Digite o segundo número:",
  },
  {
    name: "operator",
    type: "list",
    message: "Escolha a operação a fazer:",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
];

inquirer.prompt(cal).then((answer) => {
  const num1 = parseFloat(answer.firstNum);
  const num2 = parseFloat(answer.secondNum);
  const op = answer.operator;
  let result;

  switch (op) {
    case "Addition":
      result = num1 + num2;
      break;
    case "Subtraction":
      result = num1 - num2;
      break;
    case "Multiplication":
      result = num1 * num2;
      break;
    case "Division":
      if (num2 != 0) {
        result = num1 / num2;
      } else {
        result = "Não pode ser dividido por zero!";
      }
      break;
    default:
      "Operação inválida!";
  }

  console.log(`Resultado: ${result}`);
});
