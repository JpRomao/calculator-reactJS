function sum(previousNumber, actualNumber) {
  return previousNumber + actualNumber;
}

function subtraction(previousNumber, actualNumber) {
  return previousNumber - actualNumber;
}

function multiplication(previousNumber, actualNumber) {
  return previousNumber * actualNumber;
}

function division(previousNumber, actualNumber) {
  return previousNumber / actualNumber;
}

export default function calculate(previousNumber, operator, actualNumber) {
    switch (operator) {
      case '+':
        return sum(previousNumber, actualNumber);
      case '-':
        return subtraction(previousNumber, actualNumber);
      case '*':
        return multiplication(previousNumber, actualNumber);
      case '/':
        return division(previousNumber, actualNumber);
      default:
        return;
    }
}