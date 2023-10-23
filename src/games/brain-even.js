import main from '../index.js';
import { generateQuestionAndAnswer } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const isEven = (number) => number % 2 === 0;

const beginRound = () => {
  const [question, correctAnswer] = generateQuestionAndAnswer(minRange, maxRange, isEven);
  return [question, correctAnswer];
};

const brainEvenGame = () => main(rule, beginRound);

export default brainEvenGame;
