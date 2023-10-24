import startGame from '../index.js';
import { generateQuestionAndAnswer } from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 1;
const maxRange = 50;

const checkIsPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const startRound = () => {
  const [question, correctAnswer] = generateQuestionAndAnswer(minRange, maxRange, checkIsPrime);
  return [question, correctAnswer];
};

const runBrainPrimeGame = () => startGame(rule, startRound);

export default runBrainPrimeGame;
