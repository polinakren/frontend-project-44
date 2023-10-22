import main from '../index.js';
import generateRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const isEven = (number) => number % 2 === 0;

const beginRound = () => {
  const randomNumber = generateRandomNumber(minRange, maxRange);
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const brainEvenGame = () => main(rule, beginRound);

export default brainEvenGame;
