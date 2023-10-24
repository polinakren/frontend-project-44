import startGame from '../index.js';
import { generateRandomNumber } from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 50;

const getGCD = (num1, num2) => (num2 === 0 ? num1 : getGCD(num2, num1 % num2));

const startRound = () => {
  const number1 = generateRandomNumber(minRange, maxRange);
  const number2 = generateRandomNumber(minRange, maxRange);

  const question = `${number1} ${number2}`;
  const correctAnswer = getGCD(number1, number2).toString();

  return [question, correctAnswer];
};

const runBrainGcdGame = () => startGame(rule, startRound);

export default runBrainGcdGame;
