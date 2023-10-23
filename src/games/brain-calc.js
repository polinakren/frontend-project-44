import main from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 1;
const maxRange = 5;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`There is no such operator like '${operator}'!`);
  }
};

const beginRound = () => {
  const randomOperatorIndex = operators[generateRandomNumber(0, operators.length - 1)];
  const number1 = generateRandomNumber(minRange, maxRange);
  const number2 = generateRandomNumber(minRange, maxRange);

  const question = `${number1} ${randomOperatorIndex} ${number2}`;
  const correctAnswer = String(calculate(number1, number2, randomOperatorIndex));

  return [question, correctAnswer];
};

const brainCalcGame = () => main(rule, beginRound);

export default brainCalcGame;
