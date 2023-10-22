import main from '../index.js';
import generateRandomNumber from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const beginRound = () => {
  const randomNumber = generateRandomNumber(1, 100);
  const question = randomNumber.toString();
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEvenGame = () => main(rule, beginRound);

export default brainEvenGame;
