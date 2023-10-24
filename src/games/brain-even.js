import startGame from '../index.js';
import { generateQuestionAndAnswer } from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const checkIsEven = (number) => number % 2 === 0;

const startRound = () => {
  const [question, correctAnswer] = generateQuestionAndAnswer(minRange, maxRange, checkIsEven);
  return [question, correctAnswer];
};

const runBrainEvenGame = () => startGame(rule, startRound);

export default runBrainEvenGame;
